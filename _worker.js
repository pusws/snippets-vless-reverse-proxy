// 这是您设计的 与乌克兰站在一起 HTML 页面的完整内容
const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>与乌克兰站在一起</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        .ukraine-flag-bg {
            background: linear-gradient(180deg, #005BBB 0%, #005BBB 50%, #FFD700 50%, #FFD700 100%);
        }
        .floating-animation {
            animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .fade-in {
            animation: fadeIn 1.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .pulse-glow {
            animation: pulseGlow 2s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
            from { box-shadow: 0 0 20px rgba(255, 215, 0, 0.5); }
            to { box-shadow: 0 0 30px rgba(255, 215, 0, 0.8), 0 0 40px rgba(0, 91, 187, 0.3); }
        }
        .text-shadow-strong {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6);
        }
        .text-shadow-medium {
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
    </style>
</head>
<body class="ukraine-flag-bg min-h-screen flex items-center justify-center p-4">
    
    <div class="w-full max-w-2xl mx-auto">
        <!-- Main Card -->
        <div class="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 text-center fade-in">
            
            <!-- Ukrainian Flag Heart Icon -->
            <div class="mx-auto mb-8 floating-animation">
                <svg class="w-28 h-28 mx-auto" viewBox="0 0 24 24">
                    <defs>
                        <linearGradient id="ukraineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="50%" style="stop-color:#005BBB;stop-opacity:1" />
                            <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <path fill="url(#ukraineGradient)" filter="url(#glow)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            
            <!-- Main Title -->
            <h1 class="text-5xl md:text-6xl font-bold mb-8 text-[#005BBB] text-shadow-medium">
                我们与乌克兰站在一起
            </h1>
            
            <!-- Content Sections -->
            <div class="space-y-6 mb-10">
                <div class="bg-gradient-to-r from-blue-50 to-yellow-50 p-6 rounded-2xl border-l-4 border-[#005BBB]">
                    <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
                        我们坚定地支持乌克兰的主权和人民。我们强烈谴责俄罗斯联邦发动的无端侵略及其持续犯下的战争罪行。
                    </p>
                </div>

                <div class="bg-gradient-to-r from-yellow-50 to-blue-50 p-6 rounded-2xl border-l-4 border-[#FFD700]">
                    <p class="text-lg md:text-xl text-gray-800 leading-relaxed">
                        愿自由与和平早日重归这片勇敢的土地。
                    </p>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-gradient-to-r from-[#FFD700] to-[#FFA500] p-6 rounded-2xl pulse-glow">
                <p class="text-2xl md:text-3xl font-bold text-[#005BBB] mb-2">
                    #StandWithUkraine
                </p>
                <p class="text-[#005BBB] font-semibold">
                    🇺🇦 为了自由，为了和平，为了正义
                </p>
            </div>
            
            <!-- Support Links -->
            <div class="mt-8 flex flex-wrap justify-center gap-4">
                <div class="bg-[#005BBB] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004499] transition-colors cursor-pointer">
                    支持乌克兰
                </div>
                <div class="bg-[#FFD700] text-[#005BBB] px-6 py-3 rounded-full font-semibold hover:bg-[#E6C200] transition-colors cursor-pointer">
                    传播和平
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="text-center mt-6">
            <div class="bg-[#005BBB] rounded-2xl px-6 py-4 border-2 border-[#004499] shadow-lg">
                <p class="text-white text-base font-semibold">
                    愿世界和平 🕊️ Слава Україні! Героям слава!
                </p>
            </div>
        </div>
    </div>

</body>
</html>`;

// --- WebSocket 代理逻辑 ---

// 需要反代的地址
const hostname = "https://snippets.neib.cn";


/**
 * 处理 WebSocket 升级请求的函数
 * @param {Request} request 原始请求
 * @returns {Response} 转发到目标服务器的响应
 */
function handleWebSocket(request) {
    const url = new URL(request.url);
    // 构建目标服务器的 URL
    const targetUrl = hostname + url.pathname + url.search;
    // 创建一个新请求以进行转发，保留原始请求头和方法
    const newRequest = new Request(targetUrl, request);
    return fetch(newRequest);
}

// --- 主 Worker 逻辑 ---

export default {
    async fetch(request, env, ctx) {
        // 检查请求头中是否包含 'Upgrade: websocket'
        const upgradeHeader = request.headers.get('Upgrade');
        
        if (upgradeHeader && upgradeHeader.toLowerCase() === 'websocket') {
            // 如果是 WebSocket 请求，则执行代理逻辑
            return handleWebSocket(request);
        } else {
            // 否则，作为普通网页请求，返回静态 HTML 页面
            return new Response(html, {
                headers: {
                    'Content-Type': 'text/html;charset=UTF-8',
                },
            });
        }
    },
};
