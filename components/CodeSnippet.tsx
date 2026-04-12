"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const snippets = [
  {
    title: "ViewModel + Coroutines",
    lang: "Kotlin",
    langColor: "#7F52FF",
    code: `@HiltViewModel
class ChatViewModel @Inject constructor(
    private val repo: ChatRepository
) : ViewModel() {

    private val _messages = MutableStateFlow<List<Message>>(emptyList())
    val messages: StateFlow<List<Message>> = _messages

    fun loadMessages(roomId: String) {
        viewModelScope.launch {
            repo.getMessages(roomId)
                .catch { e -> handleError(e) }
                .collect { _messages.value = it }
        }
    }
}`,
  },
  {
    title: "Jetpack Compose UI",
    lang: "Kotlin / Compose",
    langColor: "#00BCD4",
    code: `@Composable
fun ChatScreen(viewModel: ChatViewModel = hiltViewModel()) {
    val messages by viewModel.messages.collectAsState()

    Scaffold(
        topBar = { ChatTopBar() },
        bottomBar = { MessageInput(onSend = viewModel::sendMessage) }
    ) { padding ->
        LazyColumn(modifier = Modifier.padding(padding)) {
            items(messages) { msg ->
                MessageBubble(message = msg)
            }
        }
    }
}`,
  },
  {
    title: "Room Entity + DAO",
    lang: "Kotlin / Room",
    langColor: "#FF6F00",
    code: `@Entity(tableName = "messages")
data class MessageEntity(
    @PrimaryKey val id: String,
    val roomId: String,
    val content: String,
    val timestamp: Long,
    val isSent: Boolean
)

@Dao
interface MessageDao {
    @Query("SELECT * FROM messages WHERE roomId = :id ORDER BY timestamp")
    fun getMessages(id: String): Flow<List<MessageEntity>>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun insert(msg: MessageEntity)
}`,
  },
];

const CodeSnippet: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const s = snippets[current];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
          Real{" "}
          <span className="text-gradient-violet">Android Code</span>{" "}
          I Write
        </h2>
        <p className="text-[#9999BB]">
          Production-ready patterns — Coroutines, Compose, Room, Hilt DI
        </p>
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {snippets.map((s, i) => (
          <button
            suppressHydrationWarning
            key={i}
            onClick={() => setCurrent(i)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
              i === current
                ? "border-[#7F52FF] bg-[#7F52FF]/15 text-[#a78bfa]"
                : "border-white/10 text-[#9999BB] hover:border-white/20"
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Code window */}
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="code-block overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-[#00DE8A]/70" />
            </div>
            <span className="text-[#9999BB] text-xs mono">{s.title.toLowerCase().replace(/ /g, "_")}.kt</span>
          </div>
          <span
            className="chip text-[10px] py-0.5"
            style={{
              background: s.langColor + "15",
              borderColor: s.langColor + "30",
              color: s.langColor,
            }}
          >
            {s.lang}
          </span>
        </div>

        {/* Code body */}
        <div className="p-5 overflow-x-auto">
          <pre className="mono text-sm leading-relaxed text-[#C9D1D9] whitespace-pre">{s.code}</pre>
        </div>
      </motion.div>

      {/* Dot nav */}
      <div className="flex justify-center gap-2 mt-6">
        {snippets.map((_, i) => (
          <button
            suppressHydrationWarning
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-[#7F52FF]" : "w-1.5 bg-white/20"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CodeSnippet;