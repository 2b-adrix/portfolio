"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";

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

const highlightKotlin = (code: string) => {
  const lines = code.split('\n');

  return lines.map((line, index) => {
    let highlighted = line
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    highlighted = highlighted
        .replace(/("[^"]*")/g, '<span class="text-[#A5D6FF]">$1</span>')
        .replace(/\b(class|private|val|var|fun|suspend|interface|data|import|if|else|return|constructor)\b/g, '<span class="text-[#FF7B72] font-semibold">$1</span>')
        .replace(/(@[A-Za-z]+)/g, '<span class="text-[#D2A8FF] font-medium">$1</span>')
        .replace(/\b(ViewModel|ChatViewModel|ChatRepository|String|Message|StateFlow|MutableStateFlow|List|Boolean|Long|MessageEntity|MessageDao|Flow|Modifier|Scaffold|LazyColumn|ChatTopBar|MessageInput|MessageBubble)\b/g, '<span class="text-[#79C0FF]">$1</span>');

    return (
      <div key={index} className="flex leading-relaxed hover:bg-white/[0.03] transition-colors rounded">
        <span className="w-8 shrink-0 text-white/20 select-none text-right pr-4 text-[11px] font-mono leading-relaxed pt-[2px]">{index + 1}</span>
        <span className="text-[#C9D1D9] text-[13px] font-mono whitespace-pre" dangerouslySetInnerHTML={{ __html: highlighted }} />
      </div>
    );
  });
};

const CodeSnippet: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);

  const s = snippets[current];

  const handleCopy = () => {
    navigator.clipboard.writeText(s.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-10 w-full relative z-10"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#7F52FF]/30 bg-[#7F52FF]/10 text-[#7F52FF] text-[10px] font-black uppercase tracking-[0.2em] mb-4"
        >
            <span className="w-2 h-2 rounded-full bg-[#7F52FF] animate-pulse" /> Code Metrics
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
          Real{" "}
          <span className="text-gradient-violet">Android Code</span>{" "}
          I Write
        </h2>
        <p className="text-[#9999BB] text-sm uppercase tracking-[0.2em] font-medium">
          Production-ready patterns — Coroutines, Compose, Room, Hilt DI
        </p>
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 mb-6 flex-wrap justify-center sm:justify-start">
        {snippets.map((tab, i) => {
          const isActive = i === current;
          return (
            <button
              suppressHydrationWarning
              key={i}
              onClick={() => {
                setCurrent(i);
                setCopied(false);
              }}
              className="relative px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 outline-none"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-[#7F52FF]/15 border border-[#7F52FF]/40 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className={isActive ? "text-white relative z-10" : "text-[#9999BB] hover:text-white relative z-10 transition-colors"}>
                {tab.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Code window */}
      <div className="relative group">
        {/* Glow behind the window */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#7F52FF]/30 to-[#00DE8A]/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none" />
        
        <div className="relative glass-1 border border-white/10 rounded-2xl overflow-hidden shadow-2xl bg-[#0d1117]">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 ml-1">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm" />
              </div>
              <span className="text-[#8b949e] text-xs font-mono font-medium tracking-wide">
                {s.title.toLowerCase().replace(/ /g, "_").replace(/\+/g, "and")}.kt
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <span
                className="chip text-[9px] py-1 px-3 font-bold uppercase tracking-widest"
                style={{
                  background: s.langColor + "15",
                  borderColor: s.langColor + "30",
                  color: s.langColor,
                }}
              >
                {s.lang}
              </span>
              <button
                onClick={handleCopy}
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-[#8b949e] hover:text-white transition-colors"
                title="Copy code"
              >
                {copied ? <IoCheckmarkOutline className="text-[#27c93f]" /> : <IoCopyOutline />}
              </button>
            </div>
          </div>

          {/* Code body */}
          <div className="p-4 sm:p-6 overflow-x-auto min-h-[320px] bg-[#0d1117] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex-1"
              >
                {highlightKotlin(s.code)}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default CodeSnippet;