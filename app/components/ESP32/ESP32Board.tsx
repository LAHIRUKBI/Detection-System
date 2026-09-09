'use client';

export default function ESP32Board() {
  const isOnline = true;

  const leftPins = ['EN', 'GPIO36', 'GPIO39', 'GPIO34', 'GPIO35', 'GPIO32', 'GPIO33', 'GPIO25', 'GPIO26', 'GPIO27', 'GPIO14', 'GPIO12', 'GPIO13', 'GND', 'VIN'];
  const rightPins = ['GPIO23', 'GPIO22', 'GPIO1', 'GPIO3', 'GPIO21', 'GPIO19', 'GPIO18', 'GPIO5', 'GPIO17', 'GPIO16', 'GPIO4', 'GPIO2', 'GPIO15', 'GND', '3.3v'];

  type ConnectedPin = {
    color: string;
    width: string;
    label: string;
    dashed?: boolean;
  };

  const connected: Record<string, ConnectedPin> = {
    'VIN': { color: 'bg-orange-500', width: 'w-24', label: 'Power (+5V)' },
    'GND': { color: 'bg-stone-800', width: 'w-28', label: 'Ground' },
    'GPIO13': { color: 'bg-green-500', width: 'w-32', label: 'PIR 1' },
    'GPIO12': { color: 'bg-blue-500', width: 'w-36', label: 'PIR 2' },
    'GPIO14': { color: 'bg-teal-400', width: 'w-40', label: 'PIR 3', dashed: true },
  };

  return (
    <div className="flex w-full flex-col items-center rounded-2xl border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-700 p-6 shadow-xl transition-colors duration-500">
      <h2 className="mb-4 text-xl font-extrabold text-gray-800 dark:text-gray-100">ESP32 Controller Unit</h2>

      {/* Scale භාවිතා කර උස අඩු කිරීම (480px) */}
      <div className="relative flex justify-center w-full" style={{ height: '480px' }}>
        <div className="absolute top-0 transform scale-[0.8] origin-top">
          
          <div className="relative w-[280px] h-[580px] bg-[#1a1a1a] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-[3px] border-[#2c2c2c]">
            {/* Mounting Holes */}
            <div className="absolute top-2 left-2 w-5 h-5 bg-[#0a0a0a] rounded-full border-4 border-[#333]"></div>
            <div className="absolute top-2 right-2 w-5 h-5 bg-[#0a0a0a] rounded-full border-4 border-[#333]"></div>
            <div className="absolute bottom-2 left-2 w-5 h-5 bg-[#0a0a0a] rounded-full border-4 border-[#333]"></div>
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#0a0a0a] rounded-full border-4 border-[#333]"></div>

            {/* Antenna Area */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-14 bg-[#111] flex justify-center items-center pb-2 rounded-t-lg z-0">
               <svg width="70" height="25" viewBox="0 0 70 25" className="mt-2">
                  <polyline points="5,25 5,5 20,5 20,20 35,20 35,5 50,5 50,20 65,20 65,25" fill="none" stroke="#b7791f" strokeWidth="3.5" strokeLinejoin="miter"/>
               </svg>
            </div>
            <div className="absolute top-14 w-full h-[1px] bg-[#333]"></div>

            {/* ESP-WROOM-32 Chip */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-44 h-52 bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] rounded shadow-lg border border-gray-400 flex flex-col items-center p-3 z-10">
              <div className="mt-2 text-gray-600 flex items-center gap-1 font-bold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a8 8 0 0116 0A8 8 0 012 11zm2 2a6 6 0 0112 0A6 6 0 014 13zm2 2a4 4 0 018 0A4 4 0 016 15zm2 2a2 2 0 014 0 2 2 0 01-4 0z"></path></svg>
                <span className="text-[10px] tracking-wider">Wi-Fi & Bluetooth</span>
              </div>
              <span className="text-gray-800 font-black text-xl mt-4 tracking-wider">ESP-WROOM-32</span>
              
              <div className="mt-auto flex justify-between w-full px-2 items-end">
                 <span className="text-gray-700 text-2xl font-serif font-bold">CE <span className="ml-1 text-sm font-sans font-normal">FC</span></span>
              </div>
            </div>

            {/* LEDs & Ports */}
            <div className="absolute bottom-20 left-[35%] flex items-center gap-1">
               <span className="text-[7px] text-gray-400 font-bold">PWR</span>
               <div className="w-2 h-2 rounded-sm bg-red-500 shadow-[0_0_10px_#ef4444] animate-pulse"></div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-[#d1d5db] to-[#9ca3af] rounded-t border-x-2 border-t-2 border-gray-400 flex justify-center z-10">
              <div className="w-10 h-3 bg-black mt-4 rounded-sm shadow-inner"></div>
            </div>

            {/* Left Column Pins */}
            <div className="absolute left-1.5 top-20 bottom-24 flex flex-col justify-between w-[18px]">
              {leftPins.map((pin) => (
                <div key={pin} className="relative flex items-center justify-center w-[18px] h-[18px]">
                  <span className="absolute left-7 text-[10px] text-gray-300 font-bold whitespace-nowrap">{pin}</span>
                  <div className="w-[18px] h-[18px] bg-[#eab308] border-2 border-[#a16207] rounded-full flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
                  </div>
                  
                  {connected[pin] && (
                    <div className="absolute right-1 flex items-center flex-row-reverse z-30">
                      <div className="w-8 h-4 bg-gray-900 border border-gray-700 rounded-sm relative">
                        <div className="absolute right-[-2px] top-0 bottom-0 w-2.5 bg-gray-400 rounded-r-sm"></div>
                      </div>
                      <div className={`h-2 ${connected[pin].width} ${connected[pin].color} ${connected[pin].dashed ? 'border-t-2 border-white border-dashed' : ''} shadow-md`}></div>
                      <span className="mr-2 px-3 py-1 text-[11px] font-bold text-gray-800 bg-white rounded shadow-md whitespace-nowrap z-40 border border-gray-200">
                        {connected[pin].label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column Pins */}
            <div className="absolute right-1.5 top-20 bottom-24 flex flex-col justify-between w-[18px]">
              {rightPins.map((pin) => (
                <div key={pin} className="relative flex items-center justify-center w-[18px] h-[18px]">
                  <div className="w-[18px] h-[18px] bg-[#eab308] border-2 border-[#a16207] rounded-full flex items-center justify-center z-20">
                    <div className="w-2.5 h-2.5 bg-[#111] rounded-full"></div>
                  </div>
                  <span className="absolute right-7 text-[10px] text-gray-300 font-bold whitespace-nowrap">{pin}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 flex w-full items-center justify-between rounded-xl bg-gray-50 dark:bg-slate-900 px-5 py-3 border border-gray-200 dark:border-slate-600">
        <span className="font-bold text-sm text-gray-600 dark:text-gray-300">Network Status</span>
        {isOnline ? (
          <div className="flex items-center gap-2 rounded-full bg-green-100 dark:bg-green-900/30 px-4 py-1.5 text-xs font-bold text-green-700 dark:text-green-400">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            Connected
          </div>
        ) : (
          <div className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-xs font-bold text-red-700">
            <span className="h-2.5 w-2.5 rounded-full bg-red-600"></span> Disconnected
          </div>
        )}
      </div>
    </div>
  );
}