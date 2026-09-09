'use client';

export default function PIRSensors() {
  const sensors = [
    { id: 1, name: 'PIR 1 (Left)', isActive: false, wireWorking: true, colors: { vcc: 'bg-orange-500', out: 'bg-green-500', gnd: 'bg-stone-800' } },
    { id: 2, name: 'PIR 2 (Center)', isActive: true, wireWorking: true, colors: { vcc: 'bg-orange-500', out: 'bg-blue-500', gnd: 'bg-stone-800' } },
    { id: 3, name: 'PIR 3 (Right)', isActive: false, wireWorking: false, colors: { vcc: 'bg-orange-500', out: 'bg-teal-400', gnd: 'bg-stone-800' } },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:bg-slate-800 dark:border-slate-700 p-6 shadow-xl w-full mx-auto transition-colors duration-500">
      <h2 className="mb-5 text-xl font-extrabold text-gray-800 dark:text-gray-100 text-center">Motion Detection Units (PIR Sensors)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sensors.map((sensor) => (
          <div key={sensor.id} className="flex flex-col items-center rounded-xl bg-gray-50/50 dark:bg-slate-900/50 p-4 border border-gray-100 dark:border-slate-600 shadow-sm">
            
            <div className="relative mb-4 flex flex-col items-center">
              {/* Sensor Board */}
              <div className="relative z-10 flex h-20 w-24 items-center justify-center rounded-md border-2 border-gray-300 bg-[#f4f6f5] shadow-md">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 ${
                  sensor.isActive ? 'bg-red-500/90 shadow-[0_0_20px_rgba(239,68,68,0.7)]' : 'bg-white shadow-inner'
                }`}>
                  <div className="h-8 w-8 rounded-full border border-gray-200 opacity-50"></div>
                </div>
              </div>

              {/* Pins */}
              <div className="relative z-20 -mt-1 flex w-full justify-center gap-2.5 bg-gray-800 px-2 py-1 rounded-b-md">
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-bold text-gray-300 mb-0.5">VCC</span>
                  <div className="h-2 w-1.5 rounded-sm bg-zinc-400"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-bold text-gray-300 mb-0.5">OUT</span>
                  <div className="h-2 w-1.5 rounded-sm bg-zinc-400"></div>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[7px] font-bold text-gray-300 mb-0.5">GND</span>
                  <div className="h-2 w-1.5 rounded-sm bg-zinc-400"></div>
                </div>
              </div>

              {/* Wires */}
              <div className="relative z-0 -mt-1 flex justify-center gap-[15px]">
                <div className={`h-10 w-1.5 ${sensor.colors.vcc} rounded-b-sm shadow-sm`}></div>
                
                {sensor.wireWorking ? (
                  <div className={`h-10 w-1.5 ${sensor.colors.out} rounded-b-sm shadow-sm ${sensor.id === 3 ? 'border-r border-dashed border-white' : ''}`}></div>
                ) : (
                  <div className="flex h-10 w-1.5 flex-col items-center justify-between">
                    <div className={`h-3 w-full ${sensor.colors.out} rounded-b-sm shadow-sm ${sensor.id === 3 ? 'border-r border-dashed border-white' : ''}`}></div>
                    <span className="text-red-500 text-[10px] font-black animate-ping">⚡</span>
                    <div className={`h-3 w-full ${sensor.colors.out} rounded-t-sm shadow-sm ${sensor.id === 3 ? 'border-r border-dashed border-white' : ''}`}></div>
                  </div>
                )}
                
                <div className={`h-10 w-1.5 ${sensor.colors.gnd} rounded-b-sm shadow-sm`}></div>
              </div>
            </div>

            <h3 className="text-base font-bold text-gray-800 dark:text-gray-200">{sensor.name}</h3>
            
            {/* Status blocks */}
            <div className="mt-2 w-full rounded-lg bg-white dark:bg-slate-800 p-2 text-center border border-gray-100 dark:border-slate-600">
              <div className="text-[10px] text-gray-500 font-semibold">Detection Status</div>
              {sensor.isActive ? (
                <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 mt-1">
                  <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span></span>
                  Motion Detected!
                </div>
              ) : (
                <div className="text-xs font-bold text-gray-500 mt-1">Standby (Clear)</div>
              )}
            </div>

            <div className="mt-2 w-full rounded-lg bg-white dark:bg-slate-800 p-2 text-center border border-gray-100 dark:border-slate-600">
              <div className="text-[10px] text-gray-500 font-semibold">Wiring Status</div>
              {sensor.wireWorking ? (
                <div className="text-xs font-bold text-green-600 mt-1">Connected</div>
              ) : (
                <div className="text-xs font-bold text-red-600 animate-pulse mt-1">Disconnected!</div>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}