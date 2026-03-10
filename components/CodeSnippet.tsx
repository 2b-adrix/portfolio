"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  {
    title: "Kotlin Android App",
    code: `class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        val button = findViewById<Button>(R.id.myButton)
        button.setOnClickListener {
            Toast.makeText(this, "Hello from Kotlin!", Toast.LENGTH_SHORT).show()
        }
    }
}`,
    language: "kotlin"
  },
  {
    title: "Python Cybersecurity Script",
    code: `import socket
import threading

def port_scanner(host, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        if result == 0:
            print(f"Port {port} is open")
        sock.close()
    except:
        pass

# Scan common ports
host = "127.0.0.1"
for port in [21, 22, 80, 443, 3389]:
    threading.Thread(target=port_scanner, args=(host, port)).start()`,
    language: "python"
  },
  {
    title: "Next.js Component",
    code: `"use client";

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="text-center">
      <p className="text-2xl mb-4">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Increment
      </button>
    </div>
  );
}`,
    language: "typescript"
  }
];

const CodeSnippet: React.FC = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const code = codeSnippets[currentSnippet].code;
    let index = 0;
    setDisplayedCode('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(prev => prev + code[index]);
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
        
        // Switch to next snippet after a delay
        setTimeout(() => {
          setCurrentSnippet(prev => (prev + 1) % codeSnippets.length);
        }, 3000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentSnippet]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-lg p-6 max-w-2xl mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-purple-400">
          {codeSnippets[currentSnippet].title}
        </h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <pre className="text-green-400 font-mono text-sm overflow-x-auto">
        <code>{displayedCode}</code>
        {isTyping && <span className="animate-pulse">|</span>}
      </pre>
      <div className="flex justify-center mt-4 space-x-2">
        {codeSnippets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSnippet(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSnippet ? 'bg-purple-500' : 'bg-gray-600'
            }`}
            title={`Switch to ${codeSnippets[index].title}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CodeSnippet;