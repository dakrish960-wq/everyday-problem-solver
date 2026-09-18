export type Solution = {
  id: number;
  title: string;
  category: string;
  quickFix: string;
  steps: string[];
  safety?: string;
professional?: string;
disclaimer?: string;
};

export const solutions: Solution[] = [
  // =========================
  // PHONE & ANDROID
  // =========================

  {
    id: 1,
    title: "Phone battery draining quickly",
    category: "phone",
    quickFix: "Check battery usage and reduce unnecessary background activity.",
    steps: [
      "Open Settings > Battery.",
      "Check which apps are using the most battery.",
      "Close or uninstall unnecessary apps.",
      "Reduce screen brightness when appropriate.",
      "Turn off Bluetooth, GPS or hotspot when not needed.",
      "Restart the phone and monitor battery usage."
    ]
  },
  {
    id: 2,
    title: "Phone storage is full",
    category: "phone",
    quickFix: "Remove unnecessary files, downloads and unused apps.",
    steps: [
      "Open Settings > Storage.",
      "Check which category is using the most space.",
      "Delete unnecessary downloads.",
      "Remove unused applications.",
      "Move important photos and videos to a safe backup.",
      "Clear temporary cache when appropriate."
    ]
  },
  {
    id: 3,
    title: "Phone is running very slow",
    category: "phone",
    quickFix: "Free storage space and reduce unnecessary background apps.",
    steps: [
      "Restart the phone.",
      "Check available storage.",
      "Remove apps you no longer use.",
      "Close unnecessary background apps.",
      "Install available system updates.",
      "Avoid installing unknown or unnecessary cleaner apps."
    ]
  },
  {
    id: 4,
    title: "Phone overheating",
    category: "phone",
    quickFix: "Stop intensive activity and allow the phone to cool naturally.",
    steps: [
      "Stop gaming or other heavy applications.",
      "Remove the phone from direct sunlight.",
      "Disconnect the charger if the phone is unusually hot.",
      "Close unnecessary background applications.",
      "Check battery usage for unusual activity.",
      "If overheating repeatedly occurs, contact an authorized service center."
    ]
  },
  {
    id: 5,
    title: "Phone not charging",
    category: "phone",
    quickFix: "Check the charger, cable and charging port.",
    steps: [
      "Try another compatible charging cable.",
      "Try another compatible power adapter.",
      "Check the charging port for visible dust or debris.",
      "Try another power outlet.",
      "Restart the phone.",
      "If charging still fails, seek professional service."
    ]
  },
  {
    id: 6,
    title: "Phone screen is frozen",
    category: "phone",
    quickFix: "Try restarting the device using the appropriate restart method.",
    steps: [
      "Wait briefly to see whether the screen responds.",
      "Close the current application if possible.",
      "Use the phone's standard restart or force-restart procedure.",
      "After restarting, check available storage.",
      "Update applications and system software.",
      "Seek service if freezing continues frequently."
    ]
  },
  {
    id: 7,
    title: "Phone keeps restarting",
    category: "phone",
    quickFix: "Check recent apps, system updates and storage.",
    steps: [
      "Remove recently installed suspicious applications.",
      "Check available storage.",
      "Install pending system updates.",
      "Restart the device normally.",
      "Check whether the problem occurs in safe mode if supported.",
      "Seek professional help if random restarts continue."
    ]
  },
  {
    id: 8,
    title: "Phone speaker has low volume",
    category: "phone",
    quickFix: "Check volume settings and make sure the speaker opening is not blocked.",
    steps: [
      "Increase media volume.",
      "Check whether Do Not Disturb or another audio mode is active.",
      "Disconnect Bluetooth devices.",
      "Clean the speaker area gently without inserting objects.",
      "Restart the phone.",
      "Seek service if the speaker remains unusually quiet."
    ]
  },
  {
    id: 9,
    title: "Phone microphone not working",
    category: "phone",
    quickFix: "Check microphone permissions and test with another application.",
    steps: [
      "Check microphone permission for the affected app.",
      "Disconnect Bluetooth headsets.",
      "Restart the phone.",
      "Test the microphone using the built-in recorder.",
      "Check for visible blockage around the microphone.",
      "Seek service if the microphone fails in multiple apps."
    ]
  },
  {
    id: 10,
    title: "Phone vibration not working",
    category: "phone",
    quickFix: "Check vibration settings and restart the phone.",
    steps: [
      "Open Sound and Vibration settings.",
      "Make sure vibration is enabled.",
      "Check Do Not Disturb settings.",
      "Restart the phone.",
      "Test vibration with another notification.",
      "Seek service if vibration never works."
    ]
  },
  {
    id: 11,
    title: "Phone Wi-Fi keeps disconnecting",
    category: "phone",
    quickFix: "Forget the Wi-Fi network and reconnect.",
    steps: [
      "Open Wi-Fi settings.",
      "Forget the affected network.",
      "Restart the phone.",
      "Restart the router.",
      "Reconnect using the correct password.",
      "Check whether other devices have the same problem."
    ]
  },
  {
    id: 12,
    title: "Bluetooth not connecting",
    category: "phone",
    quickFix: "Turn Bluetooth off and on and pair the device again.",
    steps: [
      "Turn Bluetooth off.",
      "Restart both devices if possible.",
      "Remove the old Bluetooth pairing.",
      "Turn Bluetooth on again.",
      "Put the accessory into pairing mode.",
      "Pair the devices again."
    ]
  },
  {
    id: 13,
    title: "Phone camera is blurry",
    category: "phone",
    quickFix: "Clean the camera lens and check focus.",
    steps: [
      "Clean the camera lens with a soft clean cloth.",
      "Open the camera application.",
      "Tap the subject to focus.",
      "Remove any lens obstruction or protective film.",
      "Restart the camera application.",
      "Seek service if the camera remains blurry."
    ]
  },
  {
    id: 14,
    title: "Phone flashlight not working",
    category: "phone",
    quickFix: "Close camera applications and restart the phone.",
    steps: [
      "Close the camera application.",
      "Try the flashlight again.",
      "Restart the phone.",
      "Check whether the battery is critically low.",
      "Install available system updates.",
      "Seek service if the flashlight consistently fails."
    ]
  },
  {
    id: 15,
    title: "Apps keep crashing",
    category: "phone",
    quickFix: "Update the app and clear its temporary cache if appropriate.",
    steps: [
      "Restart the phone.",
      "Update the affected application.",
      "Update the phone system if an update is available.",
      "Check available storage.",
      "Clear the application's cache if supported.",
      "Reinstall the application if the problem continues."
    ]
  },
  {
    id: 16,
    title: "Phone notifications not showing",
    category: "phone",
    quickFix: "Check notification permissions and battery restrictions.",
    steps: [
      "Open Settings > Notifications.",
      "Make sure notifications are enabled for the app.",
      "Check Do Not Disturb settings.",
      "Check battery optimization restrictions.",
      "Allow background activity when appropriate.",
      "Restart the phone and test again."
    ]
  },
  {
    id: 17,
    title: "Mobile data not working",
    category: "phone",
    quickFix: "Check mobile data, signal and network settings.",
    steps: [
      "Make sure Mobile Data is enabled.",
      "Check whether Airplane Mode is off.",
      "Check the network signal.",
      "Restart the phone.",
      "Check the SIM and mobile network settings.",
      "Contact your mobile provider if the problem continues."
    ]
  },
  {
    id: 18,
    title: "SIM card not detected",
    category: "phone",
    quickFix: "Restart the phone and check that the SIM is inserted correctly.",
    steps: [
      "Turn the phone off.",
      "Remove and reinsert the SIM carefully.",
      "Turn the phone back on.",
      "Check SIM settings.",
      "Test the SIM in another compatible device if available.",
      "Contact the network provider if the SIM remains undetected."
    ]
  },
  {
    id: 19,
    title: "Phone fingerprint unlock not working",
    category: "phone",
    quickFix: "Clean the sensor and register the fingerprint again.",
    steps: [
      "Clean and dry the fingerprint sensor.",
      "Make sure your finger is clean and dry.",
      "Restart the phone.",
      "Delete the existing fingerprint if necessary.",
      "Register the fingerprint again.",
      "Use the backup PIN or password if the sensor still fails."
    ]
  },
  {
    id: 20,
    title: "Phone screen brightness keeps changing",
    category: "phone",
    quickFix: "Check automatic or adaptive brightness settings.",
    steps: [
      "Open Display settings.",
      "Check Adaptive or Automatic Brightness.",
      "Turn it off temporarily to test.",
      "Check whether Battery Saver is affecting brightness.",
      "Restart the phone.",
      "Update system software if necessary."
    ]
  },

  // =========================
  // INTERNET & WI-FI
  // =========================

  {
    id: 21,
    title: "Wi-Fi connected but internet not working",
    category: "internet",
    quickFix: "Restart the router and reconnect your device.",
    steps: [
      "Turn Wi-Fi off on your phone.",
      "Restart the Wi-Fi router.",
      "Wait for the router lights to stabilize.",
      "Turn Wi-Fi back on.",
      "Forget the network and connect again if necessary.",
      "Contact your internet provider if all devices are affected."
    ]
  },
  {
    id: 22,
    title: "Wi-Fi signal is weak",
    category: "internet",
    quickFix: "Move closer to the router and reduce physical obstructions.",
    steps: [
      "Move closer to the router.",
      "Place the router in an open central location.",
      "Keep the router away from large metal objects.",
      "Restart the router.",
      "Check whether another channel or band is available.",
      "Consider a suitable extender if coverage remains poor."
    ]
  },
  {
    id: 23,
    title: "Internet is very slow",
    category: "internet",
    quickFix: "Restart the router and check whether multiple devices are consuming bandwidth.",
    steps: [
      "Restart the router.",
      "Disconnect devices that are not being used.",
      "Pause large downloads or uploads.",
      "Run a speed test using a trusted service.",
      "Check your internet plan and provider status.",
      "Contact your provider if speeds remain abnormal."
    ]
  },
  {
    id: 24,
    title: "Router keeps disconnecting",
    category: "internet",
    quickFix: "Restart the router and check power and ventilation.",
    steps: [
      "Check that the power cable is firmly connected.",
      "Restart the router.",
      "Place the router in a ventilated location.",
      "Check whether the issue affects all devices.",
      "Check for router firmware updates if available.",
      "Contact your internet provider if disconnections continue."
    ]
  },
  {
    id: 25,
    title: "Wi-Fi password not working",
    category: "internet",
    quickFix: "Forget the network and enter the correct password again.",
    steps: [
      "Check the password carefully.",
      "Forget the saved Wi-Fi network.",
      "Restart the phone.",
      "Reconnect and enter the password again.",
      "Check the router label or administrator settings if appropriate.",
      "Avoid sharing your Wi-Fi password publicly."
    ]
  },
  {
    id: 26,
    title: "Mobile internet is slow",
    category: "internet",
    quickFix: "Check signal strength, network mode and data usage.",
    steps: [
      "Check the mobile signal.",
      "Move to an area with better reception.",
      "Restart the phone.",
      "Check your mobile data balance or plan.",
      "Try another supported network mode if available.",
      "Contact the mobile provider if the issue continues."
    ]
  },
  {
    id: 27,
    title: "Website is not opening",
    category: "internet",
    quickFix: "Check your connection and try refreshing or using another browser.",
    steps: [
      "Check whether other websites open.",
      "Refresh the page.",
      "Restart the browser.",
      "Clear temporary browser data if appropriate.",
      "Try another browser.",
      "Check whether the website itself is experiencing an outage."
    ]
  },
  {
    id: 28,
    title: "YouTube videos keep buffering",
    category: "internet",
    quickFix: "Reduce video quality temporarily and check your internet connection.",
    steps: [
      "Check the internet connection.",
      "Pause other large downloads.",
      "Restart the router if using Wi-Fi.",
      "Lower video quality temporarily.",
      "Restart the YouTube app.",
      "Update the app if an update is available."
    ]
  },
  {
    id: 29,
    title: "Internet works on phone but not TV",
    category: "internet",
    quickFix: "Reconnect the TV to Wi-Fi and restart the router.",
    steps: [
      "Restart the TV.",
      "Restart the router.",
      "Open the TV network settings.",
      "Forget the Wi-Fi network.",
      "Connect to the network again.",
      "Check whether other devices can access the internet."
    ]
  },
  {
    id: 30,
    title: "Internet stops during rain",
    category: "internet",
    quickFix: "Check outdoor equipment and contact the provider if weather-related interruptions repeat.",
    steps: [
      "Check whether the outage affects all devices.",
      "Restart the router after the weather improves.",
      "Inspect only accessible equipment for obvious damage.",
      "Do not touch exposed outdoor electrical equipment.",
      "Check your provider's outage information.",
      "Contact the provider if interruptions continue."
    ]
  },

  // =========================
  // HOME PROBLEMS
  // =========================

  {
    id: 31,
    title: "Room smells musty",
    category: "home",
    quickFix: "Improve ventilation and reduce moisture.",
    steps: [
      "Open windows when weather permits.",
      "Improve air circulation.",
      "Check for damp walls or leaks.",
      "Dry wet areas quickly.",
      "Clean visible mold safely.",
      "Get professional help for persistent dampness or extensive mold."
    ]
  },
  {
    id: 32,
    title: "Wall has damp patches",
    category: "home",
    quickFix: "Look for the source of moisture instead of only covering the patch.",
    steps: [
      "Check nearby plumbing for leaks.",
      "Check whether rainwater is entering.",
      "Look for dampness near bathrooms or kitchens.",
      "Improve ventilation.",
      "Do not simply paint over active dampness.",
      "Use a qualified professional for persistent structural moisture problems."
    ]
  },
  {
    id: 33,
    title: "Ceiling has water stains",
    category: "home",
    quickFix: "Find and stop the water source before repainting.",
    steps: [
      "Check for plumbing leaks above the ceiling.",
      "Check the roof or upper floor after rainfall.",
      "Keep electrical equipment away from wet areas.",
      "Do not touch exposed electrical wiring.",
      "Arrange professional inspection if the leak continues.",
      "Repair and dry the area before repainting."
    ]
  },
  {
    id: 34,
    title: "Door is difficult to close",
    category: "home",
    quickFix: "Check hinges, alignment and swelling.",
    steps: [
      "Inspect the hinges.",
      "Check whether the door is rubbing against the frame.",
      "Tighten loose hinge screws if safe.",
      "Check for moisture-related swelling.",
      "Lubricate suitable moving parts when appropriate.",
      "Call a carpenter if alignment requires major adjustment."
    ]
  },
  {
    id: 35,
    title: "Window is difficult to open",
    category: "home",
    quickFix: "Check the frame, lock and moving parts.",
    steps: [
      "Check whether the lock is fully released.",
      "Inspect the frame for visible obstruction.",
      "Clean dirt around moving parts.",
      "Use suitable lubricant where appropriate.",
      "Do not force the window.",
      "Call a professional if the frame is damaged."
    ]
  },
  {
    id: 36,
    title: "Water tap is dripping",
    category: "home",
    quickFix: "A worn washer or cartridge may need replacement.",
    steps: [
      "Turn off the appropriate water supply.",
      "Check whether the tap handle is loose.",
      "Inspect accessible seals if you know how.",
      "Replace a worn washer or cartridge when appropriate.",
      "Reassemble carefully.",
      "Call a plumber if the leak persists."
    ]
  },
  {
    id: 37,
    title: "Bathroom drain smells bad",
    category: "home",
    quickFix: "Clean the drain and check whether the trap is functioning properly.",
    steps: [
      "Remove visible debris.",
      "Clean the drain cover.",
      "Flush the drain with water.",
      "Check whether the drain trap is dry.",
      "Improve bathroom ventilation.",
      "Call a plumber if sewer odors persist."
    ]
  },
  {
    id: 38,
    title: "Water pressure is low",
    category: "home",
    quickFix: "Check whether the problem affects one tap or the whole home.",
    steps: [
      "Test multiple taps.",
      "Clean a blocked faucet aerator if applicable.",
      "Check the main water supply.",
      "Check for visible leaks.",
      "Ask neighbors whether they have the same issue.",
      "Contact a plumber or water provider when necessary."
    ]
  },
  {
    id: 39,
    title: "Mosquitoes inside the house",
    category: "home",
    quickFix: "Remove standing water and block entry points.",
    steps: [
      "Check for standing water around the home.",
      "Empty or cover water containers.",
      "Use window screens where possible.",
      "Keep doors closed when practical.",
      "Clean drains and surrounding areas.",
      "Use pest-control services if infestation persists."
    ]
  },
  {
    id: 40,
    title: "Ants entering the kitchen",
    category: "home",
    quickFix: "Remove food sources and clean the trail.",
    steps: [
      "Clean food crumbs and spills.",
      "Store food in sealed containers.",
      "Clean the visible ant trail.",
      "Check for entry gaps.",
      "Seal suitable small gaps.",
      "Use appropriate pest control if the infestation continues."
    ]
  },

  // =========================
  // ELECTRONICS
  // =========================

  {
    id: 41,
    title: "TV remote is not working",
    category: "electronics",
    quickFix: "Replace the batteries and check whether the remote sensor is blocked.",
    steps: [
      "Replace both batteries with fresh batteries.",
      "Make sure they are inserted correctly.",
      "Clean the remote sensor area.",
      "Point the remote directly at the TV.",
      "Try the TV's physical buttons.",
      "Use a compatible replacement remote if necessary."
    ]
  },
  {
    id: 42,
    title: "TV has no picture",
    category: "electronics",
    quickFix: "Check the input source, cables and power.",
    steps: [
      "Make sure the TV is powered on.",
      "Check the selected input source.",
      "Reconnect HDMI or other signal cables.",
      "Restart the connected device.",
      "Restart the TV.",
      "Seek professional service if the screen remains blank."
    ]
  },
  {
    id: 43,
    title: "TV has sound but no picture",
    category: "electronics",
    quickFix: "Check the input connection and restart the TV.",
    steps: [
      "Check the selected input.",
      "Reconnect the HDMI or signal cable.",
      "Restart the TV.",
      "Test another input source.",
      "Check display settings.",
      "Seek qualified service if the problem persists."
    ]
  },
  {
    id: 44,
    title: "TV has no sound",
    category: "electronics",
    quickFix: "Check mute, volume and audio output settings.",
    steps: [
      "Increase the TV volume.",
      "Make sure the TV is not muted.",
      "Check audio output settings.",
      "Disconnect Bluetooth audio devices.",
      "Restart the TV.",
      "Test another source and seek service if necessary."
    ]
  },
  {
    id: 45,
    title: "Charger is getting hot",
    category: "electronics",
    quickFix: "Stop using a charger that becomes unusually hot and inspect it for damage.",
    steps: [
      "Disconnect the charger if it becomes excessively hot.",
      "Check the cable and adapter for visible damage.",
      "Use a compatible certified charger.",
      "Avoid covering the charger while in use.",
      "Do not use damaged charging equipment.",
      "Seek professional advice if overheating continues."
    ]
  },
  {
    id: 46,
    title: "Power bank not charging",
    category: "electronics",
    quickFix: "Try another compatible cable and power adapter.",
    steps: [
      "Try another charging cable.",
      "Try another compatible power adapter.",
      "Check the charging port for visible debris.",
      "Leave it connected for the recommended charging period.",
      "Check indicator lights if available.",
      "Replace the power bank if it is damaged or swollen."
    ]
  },
  {
    id: 47,
    title: "Bluetooth speaker has no sound",
    category: "electronics",
    quickFix: "Check Bluetooth connection and volume on both devices.",
    steps: [
      "Confirm the speaker is powered on.",
      "Check volume on the speaker and phone.",
      "Disconnect and reconnect Bluetooth.",
      "Forget and pair the speaker again.",
      "Check whether another device is connected.",
      "Restart both devices."
    ]
  },
  {
    id: 48,
    title: "LED bulb flickering",
    category: "electronics",
    quickFix: "Check the bulb, fitting and electrical connection.",
    steps: [
      "Turn off power before inspecting the fitting.",
      "Check whether the bulb is securely installed.",
      "Try a compatible replacement bulb.",
      "Check whether other bulbs have the same issue.",
      "Do not open electrical wiring unless qualified.",
      "Contact an electrician if flickering continues."
    ]
  },
  {
    id: 49,
    title: "Fan is making unusual noise",
    category: "electronics",
    quickFix: "Turn the fan off and check for loose or obstructed parts.",
    steps: [
      "Turn the fan off.",
      "Check for visible loose parts.",
      "Clean accumulated dust when safe.",
      "Check whether the fan is stable.",
      "Do not touch moving electrical components.",
      "Call a qualified technician if the noise continues."
    ]
  },
  {
    id: 50,
    title: "AC is not cooling properly",
    category: "electronics",
    quickFix: "Check the filter, temperature setting and airflow.",
    steps: [
      "Check the temperature setting.",
      "Clean the accessible air filter according to the manual.",
      "Make sure air vents are not blocked.",
      "Check whether the outdoor unit has adequate airflow.",
      "Restart the AC.",
      "Call an AC technician if cooling remains poor."
    ]
  },

  // =========================
  // CAR & BIKE
  // =========================

  {
    id: 51,
    title: "Car battery seems weak",
    category: "car",
    quickFix: "Check for lights or accessories left on and have the battery tested if needed.",
    steps: [
      "Check whether headlights or interior lights were left on.",
      "Turn off unnecessary electrical accessories.",
      "Try starting the vehicle normally.",
      "If starting remains difficult, have the battery tested.",
      "Check battery terminals only if safe to do so.",
      "Use a qualified mechanic for electrical repairs."
    ]
  },
  {
    id: 52,
    title: "Car engine is overheating",
    category: "car",
    quickFix: "Stop safely and allow the engine to cool; do not open a hot cooling system.",
    steps: [
      "Pull over somewhere safe.",
      "Turn off the engine.",
      "Allow the engine to cool naturally.",
      "Do not open a hot radiator or coolant reservoir.",
      "Check coolant only after the system is safely cool.",
      "Call roadside assistance or a qualified mechanic if needed."
    ]
  },
  {
    id: 53,
    title: "Car won't start",
    category: "car",
    quickFix: "Check the battery, fuel and basic starting conditions.",
    steps: [
      "Make sure the vehicle is in the correct starting position.",
      "Check the fuel level.",
      "Check whether electrical systems are working.",
      "Try starting once more without repeatedly cranking.",
      "If the battery seems weak, seek roadside assistance.",
      "Contact a qualified mechanic if the cause is unclear."
    ]
  },
  {
    id: 54,
    title: "Car tyre looks low",
    category: "car",
    quickFix: "Check tyre pressure using a reliable gauge.",
    steps: [
      "Park safely.",
      "Inspect the tyre for visible damage.",
      "Measure tyre pressure with a suitable gauge.",
      "Compare it with the vehicle manufacturer's recommended pressure.",
      "Inflate or repair as appropriate.",
      "Do not drive on a severely damaged or flat tyre."
    ]
  },
  {
    id: 55,
    title: "Car brake warning light is on",
    category: "car",
    quickFix: "Treat a brake warning as important and have the vehicle checked.",
    steps: [
      "Stop safely if braking performance feels abnormal.",
      "Check the owner's manual for the warning symbol.",
      "Do not ignore persistent brake warnings.",
      "Avoid unnecessary driving if braking is unsafe.",
      "Contact roadside assistance or a qualified mechanic.",
      "Do not attempt complex brake repairs without proper knowledge."
    ]
  },
  {
    id: 56,
    title: "Car headlights are dim",
    category: "car",
    quickFix: "Check the bulbs, battery and electrical system.",
    steps: [
      "Clean the exterior of the headlight lenses.",
      "Check whether both headlights are equally dim.",
      "Check the battery condition.",
      "Replace a failed bulb with the correct type.",
      "Check electrical connections if qualified.",
      "Use a mechanic for persistent electrical problems."
    ]
  },
  {
    id: 57,
    title: "Bike engine won't start",
    category: "car",
    quickFix: "Check fuel, battery and basic starting conditions.",
    steps: [
      "Check the fuel level.",
      "Make sure the engine stop switch is in the correct position.",
      "Check the battery if the starter is weak.",
      "Try starting according to the owner's manual.",
      "Avoid repeated long starting attempts.",
      "Contact a mechanic if the bike still will not start."
    ]
  },
  {
    id: 58,
    title: "Bike tyre pressure is low",
    category: "car",
    quickFix: "Check and adjust tyre pressure to the manufacturer's recommendation.",
    steps: [
      "Inspect the tyre for punctures.",
      "Measure pressure with a suitable gauge.",
      "Compare with the recommended pressure.",
      "Inflate using appropriate equipment.",
      "Check again after inflation.",
      "Repair or replace a damaged tyre before riding."
    ]
  },
  {
    id: 59,
    title: "Car AC is not cooling",
    category: "car",
    quickFix: "Check settings and airflow before seeking service.",
    steps: [
      "Set the AC to a suitable cooling mode.",
      "Check cabin airflow.",
      "Inspect the cabin filter if accessible.",
      "Make sure vents are not blocked.",
      "Restart the AC system.",
      "Have the system professionally inspected if cooling remains poor."
    ]
  },
  {
    id: 60,
    title: "Car makes a strange noise",
    category: "car",
    quickFix: "Identify whether the noise occurs during starting, braking, turning or driving.",
    steps: [
      "Stop safely if the noise is sudden or severe.",
      "Note when the noise occurs.",
      "Check for obvious loose exterior parts.",
      "Do not continue driving if steering or braking is affected.",
      "Avoid guessing at serious mechanical problems.",
      "Have the vehicle inspected by a qualified mechanic."
    ]
  },

  // =========================
  // KITCHEN & FOOD
  // =========================

  {
    id: 61,
    title: "Kitchen sink draining slowly",
    category: "kitchen",
    quickFix: "Remove visible debris and clean the drain safely.",
    steps: [
      "Remove visible food or debris.",
      "Clean the drain strainer.",
      "Run warm water through the drain.",
      "Use an appropriate household drain-cleaning method.",
      "Never mix different chemical drain cleaners.",
      "Call a plumber if the blockage persists."
    ]
  },
  {
    id: 62,
    title: "Kitchen sink is completely blocked",
    category: "kitchen",
    quickFix: "Remove accessible debris and use a suitable plunger if appropriate.",
    steps: [
      "Remove standing debris from the drain area.",
      "Use a suitable sink plunger.",
      "Run water only when it can drain safely.",
      "Do not mix chemical drain products.",
      "Stop if the blockage does not improve.",
      "Call a plumber for persistent blockage."
    ]
  },
  {
    id: 63,
    title: "Food smells bad in refrigerator",
    category: "kitchen",
    quickFix: "Remove spoiled food and clean the refrigerator.",
    steps: [
      "Check food for spoilage.",
      "Discard unsafe or spoiled food.",
      "Clean shelves and drawers.",
      "Wipe spills promptly.",
      "Keep food in sealed containers.",
      "Check refrigerator temperature according to the manufacturer's guidance."
    ]
  },
  {
    id: 64,
    title: "Refrigerator is not cooling properly",
    category: "kitchen",
    quickFix: "Check temperature settings, airflow and door sealing.",
    steps: [
      "Check the temperature setting.",
      "Make sure the door closes properly.",
      "Do not block internal air vents.",
      "Avoid overloading the refrigerator.",
      "Check the manufacturer's cleaning instructions.",
      "Call a qualified technician if cooling remains poor."
    ]
  },
  {
    id: 65,
    title: "Food gets burned while cooking",
    category: "kitchen",
    quickFix: "Reduce heat and monitor cooking more closely.",
    steps: [
      "Use a lower cooking temperature.",
      "Choose a suitable pan size.",
      "Stir or turn food at appropriate intervals.",
      "Avoid leaving food unattended.",
      "Use a timer.",
      "Adjust cooking time based on the recipe and appliance."
    ]
  },
  {
    id: 66,
    title: "Rice becomes too sticky",
    category: "kitchen",
    quickFix: "Adjust water quantity and cooking time.",
    steps: [
      "Measure rice and water consistently.",
      "Rinse rice when appropriate for the variety.",
      "Avoid excessive stirring while cooking.",
      "Use the recommended water ratio for the rice type.",
      "Allow cooked rice to rest briefly.",
      "Adjust the ratio next time based on the result."
    ]
  },
  {
    id: 67,
    title: "Milk boils over",
    category: "kitchen",
    quickFix: "Use moderate heat and keep the pot under observation.",
    steps: [
      "Use a suitable-sized pot.",
      "Heat milk on moderate heat.",
      "Stir periodically.",
      "Do not leave boiling milk unattended.",
      "Reduce heat as it approaches boiling.",
      "Remove from heat promptly when appropriate."
    ]
  },
  {
    id: 68,
    title: "Gas stove flame is yellow",
    category: "kitchen",
    quickFix: "Stop using the burner if the flame remains abnormal and have it checked.",
    steps: [
      "Turn the burner off.",
      "Allow it to cool.",
      "Check for visible food debris around the burner when safe.",
      "Do not dismantle gas equipment unless qualified.",
      "Ensure the area is ventilated.",
      "Contact a qualified gas technician if the flame remains abnormal."
    ]
  },
  {
    id: 69,
    title: "Kitchen chimney has low suction",
    category: "kitchen",
    quickFix: "Clean filters and check the exhaust path.",
    steps: [
      "Turn off the chimney.",
      "Clean the filter according to the manufacturer's instructions.",
      "Check for visible obstruction in the accessible exhaust path.",
      "Make sure the motor is functioning normally.",
      "Do not work on electrical components without proper knowledge.",
      "Call a technician if suction remains weak."
    ]
  },
  {
    id: 70,
    title: "Food gets cold quickly",
    category: "kitchen",
    quickFix: "Use suitable serving containers and keep food covered.",
    steps: [
      "Preheat suitable serving dishes when appropriate.",
      "Keep cooked food covered.",
      "Serve food promptly.",
      "Avoid repeatedly opening insulated containers.",
      "Use safe food-holding practices.",
      "Refrigerate perishable leftovers promptly."
    ]
  },

  // =========================
  // CLEANING
  // =========================

  {
    id: 71,
    title: "Clothes have a bad smell after washing",
    category: "cleaning",
    quickFix: "Dry clothes completely and clean the washing machine regularly.",
    steps: [
      "Do not leave wet clothes inside the washing machine.",
      "Dry clothes completely after washing.",
      "Clean the washing machine drum and detergent drawer.",
      "Avoid excessive detergent.",
      "Keep the washing machine door slightly open after use.",
      "Run an appropriate cleaning cycle if available."
    ]
  },
  {
    id: 72,
    title: "White clothes look dull",
    category: "cleaning",
    quickFix: "Wash whites separately and follow the garment care label.",
    steps: [
      "Separate white clothes from strongly colored garments.",
      "Check the care label.",
      "Use an appropriate detergent.",
      "Avoid overloading the washing machine.",
      "Rinse thoroughly.",
      "Dry according to the garment instructions."
    ]
  },
  {
    id: 73,
    title: "Clothes have stubborn stains",
    category: "cleaning",
    quickFix: "Treat the stain according to the fabric and stain type before washing.",
    steps: [
      "Check the garment care label.",
      "Blot rather than aggressively rubbing when appropriate.",
      "Test any cleaning product on an inconspicuous area.",
      "Treat the stain before washing.",
      "Wash according to the label.",
      "Do not use unsafe chemical mixtures."
    ]
  },
  {
    id: 74,
    title: "Bad smell from washing machine",
    category: "cleaning",
    quickFix: "Clean the drum, detergent drawer and door seal.",
    steps: [
      "Remove clothes after each wash.",
      "Clean the detergent drawer.",
      "Wipe the door seal.",
      "Run the machine's cleaning cycle if available.",
      "Leave the door open to dry after use.",
      "Seek service if a persistent odor remains."
    ]
  },
  {
    id: 75,
    title: "Bathroom tiles look dirty",
    category: "cleaning",
    quickFix: "Clean regularly and address soap residue and hard-water buildup.",
    steps: [
      "Remove loose dirt first.",
      "Use a suitable tile cleaner.",
      "Follow the product instructions.",
      "Scrub grout gently with an appropriate brush.",
      "Rinse and dry the surface.",
      "Never mix different cleaning chemicals."
    ]
  },
  {
    id: 76,
    title: "Mirror has streaks",
    category: "cleaning",
    quickFix: "Use a small amount of suitable glass cleaner and a clean lint-free cloth.",
    steps: [
      "Remove loose dust first.",
      "Apply a suitable glass cleaner sparingly.",
      "Wipe with a clean lint-free cloth.",
      "Use a dry section of the cloth for finishing.",
      "Avoid excessive liquid around electrical fixtures.",
      "Repeat if necessary."
    ]
  },
  {
    id: 77,
    title: "Floor feels sticky after cleaning",
    category: "cleaning",
    quickFix: "Use less cleaning product and rinse when appropriate.",
    steps: [
      "Check the cleaner's recommended dilution.",
      "Avoid using excessive detergent.",
      "Mop with clean water if the floor type permits.",
      "Allow the floor to dry.",
      "Check whether the product is suitable for the flooring.",
      "Avoid mixing cleaning products."
    ]
  },
  {
    id: 78,
    title: "Dust returns quickly",
    category: "cleaning",
    quickFix: "Use damp dusting and reduce dust sources.",
    steps: [
      "Dust surfaces with a suitable microfiber cloth.",
      "Clean fans and vents regularly.",
      "Wash or replace filters as appropriate.",
      "Keep windows and doors clean.",
      "Reduce unnecessary fabric or clutter that collects dust.",
      "Vacuum or clean floors regularly."
    ]
  },
  {
    id: 79,
    title: "Kitchen grease on cabinets",
    category: "cleaning",
    quickFix: "Use a suitable degreasing cleaner and avoid damaging the finish.",
    steps: [
      "Remove loose dust first.",
      "Test cleaner on a hidden area.",
      "Use a suitable mild degreaser.",
      "Wipe gently with a clean cloth.",
      "Dry the surface afterward.",
      "Follow the cabinet manufacturer's care instructions."
    ]
  },
  {
    id: 80,
    title: "Shoe smell is unpleasant",
    category: "cleaning",
    quickFix: "Keep shoes dry and allow them to air out completely.",
    steps: [
      "Remove insoles if they are washable.",
      "Allow shoes to dry fully.",
      "Air them in a suitable ventilated place.",
      "Keep socks clean and dry.",
      "Avoid wearing damp shoes repeatedly.",
      "Replace heavily damaged or persistently contaminated insoles when needed."
    ]
  },

  // =========================
  // DIY & REPAIR
  // =========================

  {
    id: 81,
    title: "Screw keeps becoming loose",
    category: "diy",
    quickFix: "Check the screw size and the condition of the hole.",
    steps: [
      "Remove the screw carefully.",
      "Check whether the screw matches the hole.",
      "Inspect the surrounding material.",
      "Use an appropriate replacement screw if needed.",
      "Avoid overtightening.",
      "Use professional repair for structural or load-bearing parts."
    ]
  },
  {
    id: 82,
    title: "Drawer is difficult to open",
    category: "diy",
    quickFix: "Check alignment and clean the drawer runners.",
    steps: [
      "Remove excessive items from the drawer.",
      "Check whether the drawer is misaligned.",
      "Clean visible dust from the runners.",
      "Check for loose screws.",
      "Use suitable lubricant if the runner allows it.",
      "Replace damaged hardware if necessary."
    ]
  },
  {
    id: 83,
    title: "Chair is wobbling",
    category: "diy",
    quickFix: "Check and tighten the joints and screws.",
    steps: [
      "Place the chair on a level surface.",
      "Identify the loose joint.",
      "Tighten accessible screws carefully.",
      "Check whether any leg is damaged.",
      "Do not use a structurally damaged chair.",
      "Replace or professionally repair unsafe parts."
    ]
  },
  {
    id: 84,
    title: "Shelf is not level",
    category: "diy",
    quickFix: "Check the mounting points and use a level.",
    steps: [
      "Remove items from the shelf.",
      "Check the shelf with a level.",
      "Inspect mounting brackets.",
      "Tighten appropriate hardware.",
      "Adjust mounting points if safe.",
      "Use professional help for heavy or load-bearing installations."
    ]
  },
  {
    id: 85,
    title: "Wall hook keeps falling",
    category: "diy",
    quickFix: "Use mounting hardware suitable for the wall type and load.",
    steps: [
      "Remove the hook.",
      "Check the wall material.",
      "Choose suitable wall anchors or hardware.",
      "Check the maximum load.",
      "Install according to the hardware instructions.",
      "Do not overload the hook."
    ]
  },
  {
    id: 86,
    title: "Cabinet door is misaligned",
    category: "diy",
    quickFix: "Inspect and adjust the cabinet hinges gradually.",
    steps: [
      "Open the cabinet door.",
      "Check which hinge needs adjustment.",
      "Tighten loose screws.",
      "Make small adjustments to adjustable hinges.",
      "Close the door and check alignment.",
      "Seek professional help if the cabinet structure is damaged."
    ]
  },
  {
    id: 87,
    title: "Tap handle is loose",
    category: "diy",
    quickFix: "Tighten the appropriate fixing screw if safely accessible.",
    steps: [
      "Turn off the water supply if required.",
      "Locate the handle fixing.",
      "Tighten the screw carefully.",
      "Avoid excessive force.",
      "Check for leaks after the repair.",
      "Call a plumber if the handle or valve is damaged."
    ]
  },
  {
    id: 88,
    title: "Curtain rod is falling",
    category: "diy",
    quickFix: "Check the brackets and use suitable wall anchors.",
    steps: [
      "Remove the curtain.",
      "Inspect the mounting brackets.",
      "Check the wall material.",
      "Use suitable anchors and screws.",
      "Install the brackets securely.",
      "Do not exceed the recommended load."
    ]
  },
  {
    id: 89,
    title: "Cabinet hinge is squeaking",
    category: "diy",
    quickFix: "Clean the hinge and use a suitable small amount of lubricant.",
    steps: [
      "Open and close the door to locate the noise.",
      "Inspect the hinge.",
      "Clean visible dirt.",
      "Apply a suitable lubricant sparingly.",
      "Move the door several times.",
      "Replace a damaged hinge if necessary."
    ]
  },
  {
    id: 90,
    title: "Picture frame is hanging crooked",
    category: "diy",
    quickFix: "Reposition the hanging point and check it with a level.",
    steps: [
      "Remove the frame carefully.",
      "Check the hanging hardware.",
      "Measure the desired position.",
      "Use a level.",
      "Rehang the frame.",
      "Use appropriate hardware for the frame's weight."
    ]
  },

  // =========================
  // GARDEN & PLANTS
  // =========================

  {
    id: 91,
    title: "Plant leaves turning yellow",
    category: "garden",
    quickFix: "Check watering, drainage and light conditions.",
    steps: [
      "Check whether the soil is excessively wet.",
      "Make sure the pot has drainage holes.",
      "Check whether the plant receives suitable light.",
      "Remove badly damaged leaves if appropriate.",
      "Adjust watering according to the plant's needs.",
      "Monitor the plant for several days."
    ]
  },
  {
    id: 92,
    title: "Plant leaves are drooping",
    category: "garden",
    quickFix: "Check soil moisture, temperature and light.",
    steps: [
      "Check the soil moisture.",
      "Water according to the plant's needs if the soil is dry.",
      "Check for waterlogged soil.",
      "Move the plant away from excessive heat if necessary.",
      "Check whether it receives suitable light.",
      "Monitor the plant after adjusting conditions."
    ]
  },
  {
    id: 93,
    title: "Plant is not growing",
    category: "garden",
    quickFix: "Check light, water, soil and growing conditions.",
    steps: [
      "Check whether the plant receives appropriate light.",
      "Check soil drainage.",
      "Water according to the plant's needs.",
      "Check whether the pot is too small.",
      "Use suitable fertilizer only when appropriate.",
      "Monitor growth over time."
    ]
  },
  {
    id: 94,
    title: "Plant leaves have brown edges",
    category: "garden",
    quickFix: "Check watering, humidity, sunlight and fertilizer use.",
    steps: [
      "Check whether the soil is too dry.",
      "Avoid excessive watering.",
      "Check for excessive direct sunlight.",
      "Check humidity needs for the plant.",
      "Avoid excessive fertilizer.",
      "Trim severely damaged leaves if appropriate."
    ]
  },
  {
    id: 95,
    title: "Small insects on plant leaves",
    category: "garden",
    quickFix: "Inspect the plant and use an appropriate pest-control method.",
    steps: [
      "Inspect leaves and stems closely.",
      "Remove heavily affected leaves if appropriate.",
      "Wash the plant gently when suitable.",
      "Isolate heavily affected indoor plants.",
      "Use a plant-safe pest-control product according to its label.",
      "Seek expert advice for severe infestations."
    ]
  },
  {
    id: 96,
    title: "Plant soil stays wet",
    category: "garden",
    quickFix: "Improve drainage and avoid unnecessary watering.",
    steps: [
      "Check whether the pot has drainage holes.",
      "Remove standing water from the tray.",
      "Allow the soil to dry appropriately.",
      "Reduce watering frequency if necessary.",
      "Check whether the soil mix drains properly.",
      "Repot only when appropriate for the plant."
    ]
  },
  {
    id: 97,
    title: "Garden grass is turning brown",
    category: "garden",
    quickFix: "Check water, sunlight, soil and mowing conditions.",
    steps: [
      "Check soil moisture.",
      "Water according to local conditions and grass needs.",
      "Avoid excessive watering.",
      "Check for compacted soil.",
      "Avoid cutting grass excessively short.",
      "Inspect for pests or disease if the problem spreads."
    ]
  },
  {
    id: 98,
    title: "Plant pot has poor drainage",
    category: "garden",
    quickFix: "Use a pot with suitable drainage holes.",
    steps: [
      "Check whether drainage holes are present.",
      "Clear blocked holes when safe.",
      "Use a suitable well-draining soil mix.",
      "Do not keep the pot sitting in stagnant water.",
      "Choose a suitable tray.",
      "Repot if the current container cannot drain properly."
    ]
  },
  {
    id: 99,
    title: "Plant has too much sunlight",
    category: "garden",
    quickFix: "Move the plant to lighting appropriate for its species.",
    steps: [
      "Look for scorched or faded leaves.",
      "Check the plant's light requirements.",
      "Move it gradually if possible.",
      "Avoid sudden extreme changes.",
      "Monitor new growth.",
      "Remove severely damaged leaves only when appropriate."
    ]
  },
  {
    id: 100,
    title: "Plant has fungus-like spots",
    category: "garden",
    quickFix: "Improve airflow and avoid keeping leaves constantly wet.",
    steps: [
      "Remove badly affected leaves when appropriate.",
      "Improve air circulation.",
      "Avoid unnecessary overhead watering.",
      "Keep affected plants separated when practical.",
      "Use an appropriate plant treatment according to its label.",
      "Seek local gardening advice if the condition spreads."
    ]
  },
    // 101
  {
    id: 101,
    title: "Phone Gets Hot While Charging",
    category: "phone",
    quickFix: "Remove the phone case and avoid using heavy apps while charging.",
    steps: [
      "Disconnect unnecessary accessories.",
      "Remove a thick phone case temporarily.",
      "Keep the phone on a hard, cool surface.",
      "Avoid gaming or video recording while charging.",
      "Use the original or certified charger and cable."
    ],
    safety: "Stop charging if the phone becomes extremely hot, swells, smells unusual, or shows signs of damage."
  },

  // 102
  {
    id: 102,
    title: "Phone Charging Very Slowly",
    category: "phone",
    quickFix: "Check the charging cable, adapter, charging port and background apps.",
    steps: [
      "Try another compatible charging cable.",
      "Try another compatible power adapter.",
      "Clean visible dust from the charging port carefully.",
      "Close unnecessary high-power apps.",
      "Restart the phone and test charging again."
    ]
  },

  // 103
  {
    id: 103,
    title: "Phone Touchscreen Not Responding",
    category: "phone",
    quickFix: "Restart the phone and make sure the screen is clean and dry.",
    steps: [
      "Clean and dry your hands.",
      "Clean the phone screen with a soft dry cloth.",
      "Remove a damaged screen protector if necessary.",
      "Restart the phone.",
      "If only one area remains unresponsive, seek professional service."
    ]
  },

  // 104
  {
    id: 104,
    title: "Phone Restarting Randomly",
    category: "phone",
    quickFix: "Check storage, recent apps and system updates.",
    steps: [
      "Make sure the battery is sufficiently charged.",
      "Free some internal storage.",
      "Remove recently installed suspicious apps.",
      "Install available official system updates.",
      "If the problem continues, back up important data and seek service."
    ]
  },

  // 105
  {
    id: 105,
    title: "Phone Speaker Sound Is Low",
    category: "phone",
    quickFix: "Clean the speaker opening and check the volume settings.",
    steps: [
      "Increase media volume.",
      "Turn off Bluetooth temporarily.",
      "Check whether Do Not Disturb or another audio mode is affecting sound.",
      "Clean the speaker grille gently with a dry soft brush.",
      "Test with another audio file."
    ]
  },

  // 106
  {
    id: 106,
    title: "Phone Charging Port Feels Loose",
    category: "phone",
    quickFix: "Check the charging port and cable for dirt, wear or damage.",
    steps: [
      "Turn off the phone before inspecting the port.",
      "Check the charging cable for a loose or damaged connector.",
      "Look for visible dust or debris in the charging port.",
      "Clean only with a safe, non-metallic method recommended for the device.",
      "Try a known-good compatible cable.",
      "Seek professional service if the port remains loose or charging cuts in and out."
    ],
    safety: "Do not insert metal objects into the charging port."
  },

  // 107
  {
    id: 107,
    title: "Phone Bluetooth Disconnects Frequently",
    category: "phone",
    quickFix: "Move the devices closer and remove old or unnecessary Bluetooth pairings.",
    steps: [
      "Keep the phone and Bluetooth accessory within a suitable range.",
      "Turn Bluetooth off and on again.",
      "Forget unused or problematic paired devices.",
      "Restart both devices.",
      "Make sure the accessory has enough battery.",
      "Pair the accessory again and test the connection."
    ]
  },

  // 108
  {
    id: 108,
    title: "Phone Cannot Detect Bluetooth Device",
    category: "phone",
    quickFix: "Put the other device into pairing mode.",
    steps: [
      "Charge the Bluetooth device.",
      "Enable pairing mode on the device.",
      "Turn Bluetooth off and on on the phone.",
      "Move the devices closer together.",
      "Try pairing again."
    ]
  },

  // 109
  {
    id: 109,
    title: "Phone Storage Fills Up Again Quickly",
    category: "phone",
    quickFix: "Check videos, downloads, messaging media and app cache.",
    steps: [
      "Open the phone's storage settings.",
      "Review large videos and photos.",
      "Delete unnecessary downloads.",
      "Remove unused apps.",
      "Check messaging apps for large media files."
    ]
  },

  // 110
  {
    id: 110,
    title: "Phone Notifications Not Appearing",
    category: "phone",
    quickFix: "Check notification permissions and battery restrictions.",
    steps: [
      "Open notification settings.",
      "Allow notifications for the affected app.",
      "Check Do Not Disturb settings.",
      "Remove excessive battery restrictions for important apps.",
      "Restart the phone."
    ]
  },

  // 111
  {
    id: 111,
    title: "Phone Camera Photos Look Blurry",
    category: "phone",
    quickFix: "Clean the camera lens and tap the subject to focus.",
    steps: [
      "Clean the camera lens with a soft cloth.",
      "Tap the subject on the screen to focus.",
      "Use adequate lighting.",
      "Hold the phone steady.",
      "Check whether the lens protector is scratched or dirty."
    ]
  },

  // 112
  {
    id: 112,
    title: "Phone GPS Location Is Inaccurate",
    category: "phone",
    quickFix: "Enable location services and use a clear outdoor area for testing.",
    steps: [
      "Turn Location on.",
      "Allow the required app to access location.",
      "Enable high-accuracy location options if available.",
      "Move outdoors or near a window.",
      "Restart the app and test again."
    ]
  },

  // 113
  {
    id: 113,
    title: "Phone Screen Turns Off Too Quickly",
    category: "phone",
    quickFix: "Increase the screen timeout duration.",
    steps: [
      "Open Display settings.",
      "Find Screen Timeout or Sleep.",
      "Choose a longer duration.",
      "Check battery-saving settings if the option keeps changing."
    ]
  },

  // 114
  {
    id: 114,
    title: "Phone Keyboard Not Appearing",
    category: "phone",
    quickFix: "Restart the keyboard app or phone.",
    steps: [
      "Tap a text input field.",
      "Restart the phone.",
      "Check the default keyboard setting.",
      "Clear the keyboard app cache if available.",
      "Update the keyboard app."
    ]
  },

  // 115
  {
    id: 115,
    title: "Phone Apps Keep Crashing",
    category: "phone",
    quickFix: "Update the app and free some storage.",
    steps: [
      "Update the affected app.",
      "Update the phone software.",
      "Clear the app cache.",
      "Restart the phone.",
      "Reinstall the app if the problem continues."
    ]
  },

  // 116
  {
    id: 116,
    title: "Phone Cannot Install an App",
    category: "phone",
    quickFix: "Check available storage, internet connection and app compatibility.",
    steps: [
      "Free enough storage space.",
      "Check your internet connection.",
      "Restart the phone.",
      "Update the app store.",
      "Make sure the app is compatible with your device."
    ]
  },

  // 117
  {
    id: 117,
    title: "Phone Date and Time Are Wrong",
    category: "phone",
    quickFix: "Enable automatic date, time and time-zone settings.",
    steps: [
      "Open Date & Time settings.",
      "Enable automatic date and time.",
      "Enable automatic time zone.",
      "Restart the phone if necessary."
    ]
  },

  // 118
  {
    id: 118,
    title: "Phone Alarm Did Not Ring",
    category: "phone",
    quickFix: "Check the alarm time, sound, volume and notification settings.",
    steps: [
      "Open the Clock app and confirm the alarm time.",
      "Make sure the alarm is enabled.",
      "Check alarm volume and sound settings.",
      "Check Do Not Disturb and battery restrictions.",
      "Restart the phone and set a test alarm.",
      "Keep the phone sufficiently charged overnight."
    ]
  },

  // 119
  {
    id: 119,
    title: "Phone Flashlight Turns Off Automatically",
    category: "phone",
    quickFix: "Check battery level, overheating and camera activity.",
    steps: [
      "Close the camera and other apps using the flash.",
      "Check whether the phone is overheating.",
      "Charge the phone if the battery is critically low.",
      "Restart the phone.",
      "Install available official system updates.",
      "Seek service if the flashlight repeatedly turns off without a clear reason."
    ]
  },

  // 120
  {
    id: 120,
    title: "Phone Cannot Share Internet Hotspot",
    category: "phone",
    quickFix: "Turn hotspot off and on and check mobile data.",
    steps: [
      "Confirm mobile data is working.",
      "Turn Hotspot off.",
      "Restart mobile data.",
      "Turn Hotspot on again.",
      "Check the hotspot password and connected-device limit."
    ]
  },

  // 121
  {
    id: 121,
    title: "Wi-Fi Works Near Router but Not Far Away",
    category: "internet",
    quickFix: "Improve router placement and reduce obstacles between the device and router.",
    steps: [
      "Move the router to an open, central location.",
      "Keep the router away from large metal objects and thick obstructions.",
      "Test both available Wi-Fi bands if supported.",
      "Restart the router.",
      "Check whether the problem occurs on multiple devices.",
      "Consider a suitable mesh or extender if coverage remains insufficient."
    ]
  },

  // 122
  {
    id: 122,
    title: "Wi-Fi Keeps Disconnecting",
    category: "internet",
    quickFix: "Restart the router and forget and reconnect to the Wi-Fi network.",
    steps: [
      "Restart the router.",
      "Restart the phone or computer.",
      "Forget the Wi-Fi network.",
      "Connect again using the correct password.",
      "Check whether other devices have the same problem."
    ]
  },

  // 123
  {
    id: 123,
    title: "Internet Is Slow at Night",
    category: "internet",
    quickFix: "Check network congestion and test the connection at different times.",
    steps: [
      "Run a speed test at different times.",
      "Disconnect unused devices.",
      "Restart the router.",
      "Check whether large downloads are running.",
      "Contact your internet provider if the slowdown is consistent."
    ]
  },

  // 124
  {
    id: 124,
    title: "Router Needs Frequent Restarting",
    category: "internet",
    quickFix: "Check router ventilation, firmware and connected devices.",
    steps: [
      "Keep the router in a cool ventilated area.",
      "Restart it and monitor the problem.",
      "Check for official firmware updates.",
      "Review connected devices.",
      "Contact the ISP if the router continues failing."
    ]
  },

  // 125
  {
    id: 125,
    title: "Mobile Data Runs Out Too Quickly",
    category: "internet",
    quickFix: "Check which apps and services are using the most mobile data.",
    steps: [
      "Open the phone's mobile data usage settings.",
      "Identify apps using unusually large amounts of data.",
      "Restrict background data for non-essential apps.",
      "Use Wi-Fi for large downloads and updates when practical.",
      "Lower video streaming quality when using mobile data.",
      "Set a data warning or limit if supported."
    ]
  },

  // 126
  {
    id: 126,
    title: "Internet Works on Wi-Fi but Not Mobile Data",
    category: "internet",
    quickFix: "Check mobile data, signal and data settings.",
    steps: [
      "Turn Wi-Fi off.",
      "Confirm mobile data is enabled.",
      "Check network signal.",
      "Toggle airplane mode briefly.",
      "Check whether your mobile data plan is active."
    ]
  },

  // 127
  {
    id: 127,
    title: "Mobile Data Is Very Slow",
    category: "internet",
    quickFix: "Move to an area with better signal and restart the connection.",
    steps: [
      "Check signal strength.",
      "Move outdoors or near a window.",
      "Toggle airplane mode.",
      "Restart the phone.",
      "Check your data plan and network status."
    ]
  },

  // 128
  {
    id: 128,
    title: "Websites Not Opening",
    category: "internet",
    quickFix: "Test another website and restart the network connection.",
    steps: [
      "Check whether other websites open.",
      "Restart the router.",
      "Try another browser.",
      "Clear browser cache if necessary.",
      "Check whether the issue affects multiple devices."
    ]
  },

  // 129
  {
    id: 129,
    title: "Video Streaming Keeps Buffering",
    category: "internet",
    quickFix: "Reduce video quality temporarily and check connection speed.",
    steps: [
      "Pause other downloads.",
      "Move closer to the router.",
      "Restart the router.",
      "Reduce streaming quality.",
      "Check whether other devices are heavily using the network."
    ]
  },

  // 130
  {
    id: 130,
    title: "Wi-Fi Password Not Accepted",
    category: "internet",
    quickFix: "Forget the network and carefully enter the current password.",
    steps: [
      "Check the Wi-Fi password.",
      "Forget the saved network.",
      "Restart Wi-Fi.",
      "Reconnect and enter the password again.",
      "Confirm that the router password has not recently changed."
    ]
  },

  // 131
  {
    id: 131,
    title: "Bluetooth Internet Tethering Not Working",
    category: "internet",
    quickFix: "Pair the devices again and enable the appropriate tethering option.",
    steps: [
      "Pair both devices.",
      "Enable Bluetooth.",
      "Enable Bluetooth tethering if supported.",
      "Check mobile data.",
      "Restart both devices if needed."
    ]
  },

  // 132
  {
    id: 132,
    title: "QR Code Wi-Fi Connection Fails",
    category: "internet",
    quickFix: "Rescan the QR code and verify that the network is active.",
    steps: [
      "Increase screen brightness if scanning from a screen.",
      "Clean the camera lens.",
      "Rescan the QR code.",
      "Confirm the router is online.",
      "Try entering the Wi-Fi password manually."
    ]
  },

  // 133
  {
    id: 133,
    title: "Router Lights Look Abnormal",
    category: "internet",
    quickFix: "Check the router manual for the meaning of each indicator.",
    steps: [
      "Observe which light is unusual.",
      "Check the router's official documentation.",
      "Restart the router.",
      "Check cables and power.",
      "Contact your ISP if the internet indicator remains abnormal."
    ]
  },

  // 134
  {
    id: 134,
    title: "Ethernet Cable Internet Not Working",
    category: "internet",
    quickFix: "Reconnect the cable and test another Ethernet port.",
    steps: [
      "Disconnect and reconnect the cable.",
      "Check both connectors.",
      "Try another router port.",
      "Restart the router and device.",
      "Try another compatible cable."
    ]
  },

  // 135
  {
    id: 135,
    title: "Home Wi-Fi Has Too Many Connected Devices",
    category: "internet",
    quickFix: "Disconnect devices you are not currently using.",
    steps: [
      "Open the router's connected-device list.",
      "Identify unused devices.",
      "Disconnect unnecessary devices.",
      "Change the Wi-Fi password if an unknown device appears.",
      "Reconnect only trusted devices."
    ],
    safety: "Do not share your Wi-Fi password publicly."
  },

  // 136
  {
    id: 136,
    title: "Ceiling Fan Is Not Starting",
    category: "home",
    quickFix: "Check the wall switch and power supply.",
    steps: [
      "Confirm the switch is on.",
      "Check whether other electrical appliances work.",
      "Check the remote or regulator if applicable.",
      "Turn the power off before inspecting visible external parts.",
      "Call a qualified electrician if wiring or internal parts need inspection."
    ],
    safety: "Do not open electrical wiring or the fan motor without proper training."
  },

  // 137
  {
    id: 137,
    title: "Ceiling Fan Making Noise",
    category: "home",
    quickFix: "Check for loose external screws and imbalance.",
    steps: [
      "Turn the fan off.",
      "Wait until the blades stop completely.",
      "Check accessible blade screws.",
      "Check whether blades appear uneven.",
      "Call a technician if the noise comes from the motor."
    ],
    safety: "Never inspect a moving ceiling fan."
  },

  // 138
  {
    id: 138,
    title: "Light Bulb Flickering",
    category: "home",
    quickFix: "Turn off the power and check whether the bulb is securely fitted.",
    steps: [
      "Turn the light off.",
      "Allow the bulb to cool.",
      "Check that the bulb is correctly fitted.",
      "Try a compatible replacement bulb.",
      "If flickering continues, contact an electrician."
    ],
    safety: "Do not touch exposed electrical wiring."
  },

  // 139
  {
    id: 139,
    title: "Power Socket Not Working",
    category: "home",
    quickFix: "Check whether the circuit breaker or another nearby socket works.",
    steps: [
      "Unplug devices from the socket.",
      "Check another socket.",
      "Check the relevant circuit breaker if it is safe to do so.",
      "Do not use the socket if it smells burnt or is damaged.",
      "Contact a qualified electrician."
    ],
    safety: "Do not dismantle a wall socket yourself."
  },

  // 140
  {
    id: 140,
    title: "Room Has a Musty Smell",
    category: "home",
    quickFix: "Increase ventilation and identify possible moisture sources.",
    steps: [
      "Open windows when weather permits.",
      "Check for damp walls or leaks.",
      "Dry wet areas.",
      "Clean washable surfaces.",
      "Use a dehumidifier if appropriate."
    ]
  },

  // 141
  {
    id: 141,
    title: "Door Squeaking",
    category: "home",
    quickFix: "Apply a suitable lubricant to the hinge.",
    steps: [
      "Open and close the door to identify the noisy hinge.",
      "Clean visible dirt from the hinge.",
      "Apply a small amount of suitable hinge lubricant.",
      "Move the door several times.",
      "Wipe away excess lubricant."
    ]
  },

  // 142
  {
    id: 142,
    title: "Door Hinge Makes a Squeaking Noise",
    category: "home",
    quickFix: "Clean the hinge and apply a small amount of suitable lubricant.",
    steps: [
      "Open and close the door to locate the noisy hinge.",
      "Inspect the hinge for visible dirt or loose screws.",
      "Tighten accessible screws carefully if needed.",
      "Clean visible dirt from the hinge.",
      "Apply a suitable hinge lubricant sparingly.",
      "Move the door several times and check the noise."
    ]
  },

  // 143
  {
    id: 143,
    title: "Window Has Condensation on the Inside",
    category: "home",
    quickFix: "Reduce indoor humidity and improve ventilation.",
    steps: [
      "Wipe away condensation to keep the area dry.",
      "Improve room ventilation when practical.",
      "Use an exhaust fan in bathrooms or kitchens.",
      "Avoid drying large amounts of wet laundry indoors when possible.",
      "Use a dehumidifier if appropriate.",
      "Check for persistent moisture problems if condensation is severe."
    ]
  },

  // 144
  {
    id: 144,
    title: "Bathroom Mirror Keeps Fogging Up",
    category: "home",
    quickFix: "Improve bathroom ventilation and reduce moisture buildup.",
    steps: [
      "Run the exhaust fan during and after a hot shower.",
      "Open a window when weather and privacy allow.",
      "Wipe the mirror dry after use.",
      "Keep the bathroom door open after bathing when practical.",
      "Reduce unnecessary steam buildup.",
      "Consider an appropriate anti-fog mirror solution if needed."
    ]
  },

  // 145
  {
    id: 145,
    title: "Low Water Pressure at One Tap",
    category: "home",
    quickFix: "Clean the tap aerator and check for blockages.",
    steps: [
      "Turn the tap off.",
      "Remove the aerator if removable.",
      "Clean dirt or mineral deposits.",
      "Reinstall it securely.",
      "Check whether pressure improves."
    ]
  },

  // 146
  {
    id: 146,
    title: "Bathroom Mirror Gets Foggy",
    category: "home",
    quickFix: "Improve ventilation and wipe condensation regularly.",
    steps: [
      "Turn on the bathroom exhaust fan if available.",
      "Open a window when appropriate.",
      "Wipe condensation from the mirror.",
      "Keep the bathroom well ventilated.",
      "Consider an anti-fog mirror treatment."
    ]
  },

  // 147
  {
    id: 147,
    title: "Room Feels Too Humid",
    category: "home",
    quickFix: "Increase ventilation and reduce moisture sources.",
    steps: [
      "Open windows when appropriate.",
      "Use an exhaust fan while cooking or bathing.",
      "Dry wet clothes outside the room when possible.",
      "Use a dehumidifier if needed.",
      "Check for hidden leaks."
    ]
  },

  // 148
  {
    id: 148,
    title: "Water Tank Is Overflowing",
    category: "home",
    quickFix: "Stop the water supply and inspect the float or automatic controller.",
    steps: [
      "Turn off the pump or water supply.",
      "Check whether the float mechanism is stuck.",
      "Inspect the automatic controller if installed.",
      "Avoid climbing onto an unsafe tank area.",
      "Call a plumber or technician if necessary."
    ],
    safety: "Avoid climbing onto wet roofs or tanks without proper safety equipment."
  },

  // 149
  {
    id: 149,
    title: "Bathroom Floor Dries Slowly",
    category: "home",
    quickFix: "Clear the drain and improve floor drainage.",
    steps: [
      "Remove visible hair and debris.",
      "Clean the drain cover.",
      "Flush with suitable water.",
      "Check whether the floor slope directs water toward the drain.",
      "Call a plumber if the drain remains blocked."
    ]
  },

  // 150
  {
    id: 150,
    title: "Water Stain on Ceiling",
    category: "home",
    quickFix: "Look for the source of the leak before repairing the stain.",
    steps: [
      "Check whether the area is still wet.",
      "Inspect the room above if safely accessible.",
      "Check nearby plumbing for visible leaks.",
      "Repair the water source first.",
      "Allow the ceiling to dry before repainting."
    ],
    safety: "Keep away from electrical fixtures near a wet ceiling and seek professional help."
  },

  // 151
  {
    id: 151,
    title: "TV Has No Picture but Has Sound",
    category: "electronics",
    quickFix: "Check input selection and restart the TV.",
    steps: [
      "Confirm the TV is on the correct input.",
      "Restart the TV.",
      "Check HDMI or other connection cables.",
      "Try another input source.",
      "Seek service if the screen remains black."
    ]
  },

  // 152
  {
    id: 152,
    title: "TV Has Picture but No Sound",
    category: "electronics",
    quickFix: "Check mute, volume and audio output settings.",
    steps: [
      "Increase the TV volume.",
      "Make sure mute is off.",
      "Disconnect Bluetooth speakers or headphones.",
      "Check audio output settings.",
      "Restart the TV."
    ]
  },

  // 153
  {
    id: 153,
    title: "TV Remote Buttons Not Working",
    category: "electronics",
    quickFix: "Replace the batteries and clean the remote sensor area.",
    steps: [
      "Replace both batteries with compatible new ones.",
      "Check battery orientation.",
      "Clean the remote buttons and sensor area.",
      "Point the remote directly toward the TV sensor.",
      "Try a compatible replacement remote if necessary."
    ]
  },

  // 154
  {
    id: 154,
    title: "Remote Works Only from Very Close",
    category: "electronics",
    quickFix: "Replace the batteries and remove obstacles.",
    steps: [
      "Replace the batteries.",
      "Clean the remote's front sensor area.",
      "Remove objects blocking the TV sensor.",
      "Test from different angles.",
      "Replace the remote if its transmitter is damaged."
    ]
  },

  // 155
  {
    id: 155,
    title: "Charger Cable Keeps Disconnecting",
    category: "electronics",
    quickFix: "Check the cable and charging port for damage or debris.",
    steps: [
      "Try another compatible cable.",
      "Inspect the cable for damage.",
      "Check the charging port for visible debris.",
      "Do not force the connector.",
      "Replace damaged accessories."
    ],
    safety: "Do not use cables with exposed wires or burnt connectors."
  },

  // 156
  {
    id: 156,
    title: "Power Bank Not Charging Phone",
    category: "electronics",
    quickFix: "Charge the power bank fully and try another compatible cable.",
    steps: [
      "Check the power bank charge level.",
      "Press its power button if required.",
      "Try another compatible cable.",
      "Try another output port.",
      "Check whether the phone accepts the connection."
    ]
  },

  // 157
  {
    id: 157,
    title: "Power Bank Drains Very Fast",
    category: "electronics",
    quickFix: "Check battery condition, connected devices and charging behavior.",
    steps: [
      "Disconnect devices that are not being charged.",
      "Check whether the power bank is being used while nearly empty.",
      "Charge it with a compatible adapter and cable.",
      "Check for unusual heat, swelling or physical damage.",
      "Avoid leaving it connected unnecessarily.",
      "Replace the power bank if its battery no longer holds a useful charge."
    ],
    safety: "Stop using a power bank that is swollen, leaking, unusually hot or physically damaged."
  },

  // 158
  {
    id: 158,
    title: "Earphones Work on One Side Only",
    category: "electronics",
    quickFix: "Clean the connector and test another device.",
    steps: [
      "Reconnect the earphones.",
      "Check left-right audio balance settings.",
      "Clean the connector carefully.",
      "Test on another device.",
      "Replace the earphones if the cable is damaged."
    ]
  },

  // 159
  {
    id: 159,
    title: "Wireless Earbuds Not Pairing",
    category: "electronics",
    quickFix: "Place the earbuds in pairing mode and reconnect.",
    steps: [
      "Charge the earbuds and case.",
      "Forget the earbuds from Bluetooth settings.",
      "Put them into pairing mode.",
      "Restart Bluetooth.",
      "Pair them again."
    ]
  },

  // 160
  {
    id: 160,
    title: "USB Device Not Recognized",
    category: "electronics",
    quickFix: "Reconnect the device and try another compatible port.",
    steps: [
      "Disconnect and reconnect the USB device.",
      "Try another USB port.",
      "Restart the host device.",
      "Check whether the USB device works elsewhere.",
      "Use a compatible cable or adapter."
    ]
  },

  // 161
  {
    id: 161,
    title: "Laptop Battery Drains Quickly",
    category: "electronics",
    quickFix: "Reduce brightness and close unnecessary background applications.",
    steps: [
      "Reduce screen brightness.",
      "Close unused applications.",
      "Turn off unnecessary wireless features.",
      "Use the recommended power mode.",
      "Check battery health if the problem persists."
    ]
  },

  // 162
  {
    id: 162,
    title: "Laptop Gets Too Hot",
    category: "electronics",
    quickFix: "Improve ventilation and remove dust from accessible vents.",
    steps: [
      "Place the laptop on a hard flat surface.",
      "Do not block the ventilation openings.",
      "Close unnecessary heavy applications.",
      "Clean external vents carefully.",
      "Seek service if overheating continues."
    ],
    safety: "Do not open internal electronics unless you are qualified."
  },

  // 163
  {
    id: 163,
    title: "Computer Monitor Shows No Signal",
    category: "electronics",
    quickFix: "Check the display cable and selected input source.",
    steps: [
      "Check that the monitor is powered on.",
      "Reconnect the display cable.",
      "Select the correct input source.",
      "Try another compatible cable if available.",
      "Restart the computer."
    ]
  },

  // 164
  {
    id: 164,
    title: "HDMI Connection Has No Picture",
    category: "electronics",
    quickFix: "Reconnect the HDMI cable and select the correct input.",
    steps: [
      "Disconnect the HDMI cable.",
      "Reconnect both ends firmly.",
      "Select the correct HDMI input.",
      "Restart both devices.",
      "Try another HDMI port if available."
    ]
  },

  // 165
  {
    id: 165,
    title: "Bluetooth Speaker Sound Is Distorted",
    category: "electronics",
    quickFix: "Reduce volume and move the speaker closer to the source.",
    steps: [
      "Reduce speaker volume.",
      "Move the phone or computer closer.",
      "Disconnect other Bluetooth devices.",
      "Restart the speaker.",
      "Reconnect the speaker."
    ]
  },

  // 166
  {
    id: 166,
    title: "Car Fuel Consumption Suddenly Increased",
    category: "car",
    quickFix: "Check tyre pressure, driving conditions and basic vehicle maintenance.",
    steps: [
      "Check tyre pressure against the manufacturer's recommendation.",
      "Notice whether driving has become more frequent or congested.",
      "Check whether the vehicle is carrying unnecessary extra weight.",
      "Review recent maintenance and warning lights.",
      "Avoid excessive idling and aggressive acceleration.",
      "Have the vehicle inspected if fuel consumption remains unusually high."
    ]
  },

  // 167
  {
    id: 167,
    title: "Car Engine Takes Longer to Start",
    category: "car",
    quickFix: "Check battery condition and fuel level.",
    steps: [
      "Check fuel level.",
      "Listen for unusual starting sounds.",
      "Check battery condition.",
      "Avoid repeated long cranking.",
      "Have the vehicle inspected if the issue repeats."
    ]
  },

  // 168
  {
    id: 168,
    title: "Car Headlight Is Dim",
    category: "car",
    quickFix: "Clean the headlight lens and check the bulb and electrical system.",
    steps: [
      "Clean the outside of the headlight lens.",
      "Check whether both headlights have similar brightness.",
      "Inspect the bulb if accessible.",
      "Check the vehicle battery and charging system.",
      "Have an electrician inspect persistent problems."
    ]
  },

  // 169
  {
    id: 169,
    title: "Car Horn Not Working",
    category: "car",
    quickFix: "Check the horn fuse and electrical system.",
    steps: [
      "Test the horn briefly.",
      "Check the vehicle manual for the horn fuse location.",
      "Inspect the fuse if you know how.",
      "Do not replace a fuse with a higher rating.",
      "Seek professional service if necessary."
    ],
    safety: "Never replace a fuse with wire or an incorrectly rated fuse."
  },

  // 170
  {
    id: 170,
    title: "Car AC Is Not Cooling Well",
    category: "car",
    quickFix: "Check airflow and have the AC system inspected if cooling remains poor.",
    steps: [
      "Check whether the blower produces normal airflow.",
      "Inspect the cabin air filter if accessible.",
      "Confirm the AC setting is correct.",
      "Check whether cooling improves while driving.",
      "Have the AC system professionally checked."
    ]
  },

  // 171
  {
    id: 171,
    title: "Car Windshield Fogs Up",
    category: "car",
    quickFix: "Use the windshield defog/defrost setting.",
    steps: [
      "Turn on the windshield defog setting.",
      "Adjust the fan toward the windshield.",
      "Use AC if supported by the vehicle.",
      "Keep the windshield clean.",
      "Avoid driving until visibility is clear."
    ],
    safety: "Do not drive when windshield visibility is significantly reduced."
  },

  // 172
  {
    id: 172,
    title: "Car Tyre Pressure Seems Low",
    category: "car",
    quickFix: "Check tyre pressure with a reliable pressure gauge.",
    steps: [
      "Check the tyre pressure when tyres are reasonably cool.",
      "Compare it with the vehicle manufacturer's recommended pressure.",
      "Inflate to the recommended level.",
      "Inspect for visible damage.",
      "Have a suspected puncture checked promptly."
    ]
  },

  // 173
  {
    id: 173,
    title: "Bike Tyre Feels Soft",
    category: "car",
    quickFix: "Check pressure and inspect for punctures.",
    steps: [
      "Check tyre pressure.",
      "Look for visible nails or cuts.",
      "Inflate to the manufacturer's recommended pressure.",
      "Monitor pressure after riding.",
      "Repair or replace a damaged tyre professionally."
    ]
  },

  // 174
  {
    id: 174,
    title: "Car Brake Pedal Feels Soft",
    category: "car",
    quickFix: "Stop driving and have the braking system inspected.",
    steps: [
      "Do not continue normal driving.",
      "Park safely.",
      "Check for obvious fluid leakage without touching hot components.",
      "Arrange professional inspection.",
      "Have the braking system repaired before regular use."
    ],
    safety: "Brake problems can be dangerous. Do not drive a vehicle with unreliable brakes."
  },

  // 175
  {
    id: 175,
    title: "Car Steering Feels Heavy",
    category: "car",
    quickFix: "Stop safely and check the vehicle according to its manual.",
    steps: [
      "Slow down safely.",
      "Check whether the steering warning light is on.",
      "Check tyre pressure.",
      "Check the vehicle manual for power-steering requirements.",
      "Seek professional inspection if the issue persists."
    ],
    safety: "Do not continue driving if steering control is seriously affected."
  },

  // 176
  {
    id: 176,
    title: "Car Makes a Squealing Noise",
    category: "car",
    quickFix: "Identify whether the noise changes during braking or acceleration.",
    steps: [
      "Note when the sound occurs.",
      "Check whether it happens during braking.",
      "Check whether it occurs during engine startup.",
      "Avoid unnecessary driving if the noise is severe.",
      "Have the vehicle inspected."
    ]
  },

  // 177
  {
    id: 177,
    title: "Car Pulls to One Side",
    category: "car",
    quickFix: "Check tyre pressure and wheel alignment.",
    steps: [
      "Check all tyre pressures.",
      "Inspect tyres for uneven wear.",
      "Have wheel alignment checked.",
      "Check suspension if necessary.",
      "Drive carefully until the issue is resolved."
    ]
  },

  // 178
  {
    id: 178,
    title: "Car Dashboard Warning Light Appears",
    category: "car",
    quickFix: "Check the vehicle manual for the warning symbol.",
    steps: [
      "Identify the warning light.",
      "Check the vehicle manual.",
      "If the light is red or indicates a serious fault, stop safely.",
      "Do not ignore persistent warning lights.",
      "Have the vehicle diagnosed professionally."
    ]
  },

  // 179
  {
    id: 179,
    title: "Bike Chain Makes Noise",
    category: "car",
    quickFix: "Clean and lubricate the chain with suitable chain lubricant.",
    steps: [
      "Clean dirt from the chain.",
      "Allow it to dry.",
      "Apply suitable chain lubricant.",
      "Rotate the wheel or pedal carefully.",
      "Wipe away excess lubricant."
    ]
  },

  // 180
  {
    id: 180,
    title: "Car Wipers Leave Streaks",
    category: "car",
    quickFix: "Clean the blades and replace worn blades.",
    steps: [
      "Clean the windshield.",
      "Wipe the rubber blades with a damp cloth.",
      "Check for cracks or damage.",
      "Replace worn blades.",
      "Use suitable windshield washer fluid."
    ]
  },

  // 181
  {
    id: 181,
    title: "Rice Becomes Too Dry After Cooking",
    category: "kitchen",
    quickFix: "Adjust the water ratio, heat and cooking time for the rice variety.",
    steps: [
      "Check the recommended rice-to-water ratio.",
      "Keep the pot covered while cooking when appropriate.",
      "Use suitable heat and avoid excessive evaporation.",
      "Check the rice before all moisture is lost.",
      "Let the cooked rice rest briefly with the lid on.",
      "Adjust the water ratio slightly next time based on the rice variety."
    ]
  },

  // 182
  {
    id: 182,
    title: "Rice Becomes Too Dry",
    category: "kitchen",
    quickFix: "Use the appropriate water ratio and cooking time.",
    steps: [
      "Check the rice-to-water ratio.",
      "Cover the pot properly while cooking.",
      "Cook until the water is absorbed.",
      "Allow the rice to rest.",
      "Adjust water slightly next time based on the rice variety."
    ]
  },

  // 183
  {
    id: 183,
    title: "Curry Is Too Spicy",
    category: "kitchen",
    quickFix: "Increase the non-spicy base ingredients to balance the heat.",
    steps: [
      "Add more of the main curry base if appropriate.",
      "Increase the quantity of other ingredients.",
      "Use a suitable dairy or coconut-based ingredient when compatible with the recipe.",
      "Taste and adjust gradually.",
      "Avoid adding too much liquid at once."
    ]
  },

  // 184
  {
    id: 184,
    title: "Curry Is Too Salty",
    category: "kitchen",
    quickFix: "Increase the unsalted ingredients to dilute the saltiness.",
    steps: [
      "Add more unsalted curry base.",
      "Increase vegetables or other main ingredients.",
      "Add a small amount of water if appropriate.",
      "Simmer and taste again.",
      "Avoid adding additional salt."
    ]
  },

  // 185
  {
    id: 185,
    title: "Tea Became Too Strong",
    category: "kitchen",
    quickFix: "Dilute with additional hot water or milk.",
    steps: [
      "Add a small amount of hot water.",
      "Add milk if suitable.",
      "Taste again.",
      "Avoid over-boiling tea next time."
    ]
  },

  // 186
  {
    id: 186,
    title: "Food Becomes Too Spicy",
    category: "kitchen",
    quickFix: "Balance the dish by increasing suitable non-spicy ingredients.",
    steps: [
      "Add more of the main unsalted ingredients when appropriate.",
      "Increase the sauce or curry base if suitable.",
      "Add a compatible dairy or coconut-based ingredient when appropriate.",
      "Adjust gradually and taste after each change.",
      "Avoid adding a large amount of liquid at once.",
      "Serve with a suitable mild side dish if the recipe allows."
    ]
  },

  // 187
  {
    id: 187,
    title: "Onions Make Eyes Water",
    category: "kitchen",
    quickFix: "Use a sharp knife and improve ventilation.",
    steps: [
      "Use a sharp knife.",
      "Cut onions in a well-ventilated area.",
      "Chill onions briefly if helpful.",
      "Avoid touching your eyes while cutting.",
      "Wash hands after preparation."
    ]
  },

  // 188
  {
    id: 188,
    title: "Bread Becomes Hard",
    category: "kitchen",
    quickFix: "Store bread properly in an airtight container.",
    steps: [
      "Keep bread sealed after opening.",
      "Avoid unnecessary exposure to air.",
      "Store according to the bread manufacturer's guidance.",
      "Use older bread for toast or other suitable recipes."
    ]
  },

  // 189
  {
    id: 189,
    title: "Vegetables Lose Freshness Quickly",
    category: "kitchen",
    quickFix: "Store vegetables according to their moisture and temperature needs.",
    steps: [
      "Remove damaged pieces.",
      "Keep vegetables clean and reasonably dry.",
      "Use suitable refrigerator compartments.",
      "Avoid overcrowding.",
      "Use highly perishable vegetables first."
    ]
  },

  // 190
  {
    id: 190,
    title: "Potatoes Sprout Quickly",
    category: "kitchen",
    quickFix: "Store potatoes in a cool, dark and dry place.",
    steps: [
      "Keep potatoes away from direct sunlight.",
      "Avoid storing them in excessive heat.",
      "Provide ventilation.",
      "Remove spoiled potatoes.",
      "Follow food-safety guidance if potatoes become green or heavily sprouted."
    ]
  },

  // 191
  {
    id: 191,
    title: "Refrigerator Smells Bad",
    category: "kitchen",
    quickFix: "Remove spoiled food and clean shelves and drawers.",
    steps: [
      "Discard spoiled food.",
      "Remove shelves and drawers if possible.",
      "Clean with a suitable food-safe cleaner.",
      "Dry all surfaces.",
      "Keep food covered."
    ]
  },

  // 192
  {
    id: 192,
    title: "Refrigerator Has Too Much Frost",
    category: "kitchen",
    quickFix: "Check the door seal, temperature setting and airflow.",
    steps: [
      "Check whether the refrigerator door closes fully.",
      "Inspect the door gasket for visible damage or gaps.",
      "Avoid blocking internal air vents.",
      "Check the temperature setting according to the manual.",
      "Defrost only according to the manufacturer's instructions.",
      "Contact a qualified technician if heavy frost returns quickly."
    ]
  },

  // 193
  {
    id: 193,
    title: "Freezer Has Too Much Ice",
    category: "kitchen",
    quickFix: "Check the door seal and defrost according to the manufacturer's instructions.",
    steps: [
      "Check that the freezer door closes fully.",
      "Inspect the door gasket.",
      "Remove unnecessary frost according to the manual.",
      "Do not use sharp tools to remove ice.",
      "Seek service if excessive icing returns."
    ],
    safety: "Never use a knife or sharp metal object to remove freezer ice."
  },

  // 194
  {
    id: 194,
    title: "Gas Stove Burner Keeps Going Out",
    category: "kitchen",
    quickFix: "Check the burner area for safe, visible blockage and ensure the flame is stable.",
    steps: [
      "Turn the burner off.",
      "Allow the burner to cool completely.",
      "Clean visible food residue around the burner when safe.",
      "Make sure the burner cap is positioned correctly if applicable.",
      "Try the burner again according to the appliance instructions.",
      "Contact a qualified gas technician if the flame keeps going out."
    ],
    safety: "If you smell gas, turn off the gas supply if safe, avoid flames and electrical switches, ventilate the area, and contact the appropriate gas emergency service."
  },

  // 195
  {
    id: 195,
    title: "Kitchen Sink Drains Slowly",
    category: "kitchen",
    quickFix: "Remove visible debris and clean the drain.",
    steps: [
      "Remove visible food particles.",
      "Clean the drain strainer.",
      "Flush with suitable hot water if safe for your plumbing.",
      "Use an appropriate drain-cleaning method.",
      "Call a plumber if the blockage persists."
    ]
  },

  // 196
  {
    id: 196,
    title: "Kitchen Knife Is Dull",
    category: "kitchen",
    quickFix: "Sharpen the knife using a suitable sharpening tool.",
    steps: [
      "Clean and dry the knife.",
      "Use an appropriate sharpening tool.",
      "Follow the tool manufacturer's instructions.",
      "Test the edge carefully.",
      "Store the knife safely."
    ],
    safety: "Always sharpen knives away from your fingers and use proper handling."
  },

  // 197
  {
    id: 197,
    title: "Cutting Board Smells Bad",
    category: "kitchen",
    quickFix: "Wash, disinfect appropriately and dry the board thoroughly.",
    steps: [
      "Wash the board with hot soapy water.",
      "Rinse thoroughly.",
      "Use a suitable food-safe cleaning method.",
      "Allow it to dry completely.",
      "Replace deeply cracked or damaged boards."
    ]
  },

  // 198
  {
    id: 198,
    title: "Food Sticks to Pan",
    category: "kitchen",
    quickFix: "Use suitable heat and enough cooking fat for the pan type.",
    steps: [
      "Preheat the pan appropriately.",
      "Use the recommended amount of cooking oil.",
      "Avoid moving food too early.",
      "Use suitable utensils.",
      "Follow the cookware manufacturer's care instructions."
    ]
  },

  // 199
  {
    id: 199,
    title: "Eggs Crack While Boiling",
    category: "kitchen",
    quickFix: "Handle eggs gently and avoid extreme temperature changes.",
    steps: [
      "Place eggs gently in the pot.",
      "Use moderate heat.",
      "Avoid sudden temperature changes.",
      "Keep the water at a gentle boil.",
      "Cool eggs gradually after cooking."
    ]
  },

  // 200
  {
    id: 200,
    title: "Food Gets Burnt at the Bottom",
    category: "kitchen",
    quickFix: "Reduce heat and use a suitable thick-bottomed pan.",
    steps: [
      "Use moderate heat.",
      "Stir food as appropriate.",
      "Use a suitable pan.",
      "Avoid leaving food unattended.",
      "Move the food to a clean pan if the bottom begins burning."
    ]
  },

  // 201
  {
    id: 201,
    title: "Clothes Take Too Long to Dry",
    category: "cleaning",
    quickFix: "Improve airflow and reduce excess moisture before drying.",
    steps: [
      "Use the correct spin setting before drying when available.",
      "Shake clothes out before hanging them.",
      "Leave space between garments for airflow.",
      "Dry clothes in a well-ventilated area.",
      "Use sunlight when suitable for the fabric.",
      "Avoid leaving damp clothes piled together."
    ]
  },

  // 202
  {
    id: 202,
    title: "Towels Smell Musty After Washing",
    category: "cleaning",
    quickFix: "Wash towels properly and dry them completely after each wash.",
    steps: [
      "Do not leave wet towels in a closed basket for long periods.",
      "Wash towels according to their care labels.",
      "Avoid using excessive detergent or fabric softener.",
      "Clean the washing machine drum and detergent drawer regularly.",
      "Dry towels completely before storing them.",
      "Wash again if a musty smell remains."
    ]
  },

  // 203
  {
    id: 203,
    title: "Clothes Have Detergent Residue",
    category: "cleaning",
    quickFix: "Use the recommended detergent quantity and an adequate rinse.",
    steps: [
      "Check the detergent instructions.",
      "Avoid overfilling the machine.",
      "Use the appropriate water temperature.",
      "Run an extra rinse if suitable.",
      "Clean the detergent drawer."
    ]
  },

  // 204
  {
    id: 204,
    title: "Washing Machine Shakes Too Much",
    category: "cleaning",
    quickFix: "Check load balance and machine leveling.",
    steps: [
      "Stop the machine if it is moving excessively.",
      "Redistribute the clothes.",
      "Avoid overloading.",
      "Check that the machine is level.",
      "Seek service if vibration continues."
    ],
    safety: "Do not place hands inside a moving washing machine."
  },

  // 205
  {
    id: 205,
    title: "Washing Machine Does Not Drain",
    category: "cleaning",
    quickFix: "Check the drain hose and filter according to the manual.",
    steps: [
      "Stop the machine.",
      "Check the drain hose for visible kinks.",
      "Clean the drain filter according to the manual.",
      "Remove standing water safely if instructed by the manufacturer.",
      "Call a technician if the pump remains blocked."
    ],
    safety: "Disconnect power before servicing accessible filters or components."
  },

  // 206
  {
    id: 206,
    title: "Grease Stain on Clothes",
    category: "cleaning",
    quickFix: "Treat the stain before washing according to the fabric care label.",
    steps: [
      "Blot excess grease without spreading it.",
      "Apply a suitable laundry stain treatment.",
      "Gently work it into the stain.",
      "Wash according to the care label.",
      "Check the stain before drying."
    ]
  },

  // 207
  {
    id: 207,
    title: "Ink Stain on Clothes",
    category: "cleaning",
    quickFix: "Blot the stain and use a fabric-safe stain treatment.",
    steps: [
      "Place a clean absorbent cloth behind the stain.",
      "Blot rather than rubbing aggressively.",
      "Test any stain remover on a hidden area first.",
      "Wash according to the care label.",
      "Repeat if necessary before drying."
    ]
  },

  // 208
  {
    id: 208,
    title: "Sweat Smell in Clothes",
    category: "cleaning",
    quickFix: "Wash promptly and allow clothes to dry completely.",
    steps: [
      "Do not leave sweaty clothes damp for long.",
      "Wash using suitable detergent.",
      "Follow the garment care label.",
      "Dry thoroughly.",
      "Clean the washing machine regularly."
    ]
  },

  // 209
  {
    id: 209,
    title: "Towel Smells Musty",
    category: "cleaning",
    quickFix: "Wash towels thoroughly and dry them completely.",
    steps: [
      "Avoid leaving wet towels in a pile.",
      "Wash according to the care label.",
      "Do not overload the washing machine.",
      "Dry towels completely.",
      "Keep the storage area dry."
    ]
  },

  // 210
  {
    id: 210,
    title: "Glass Has Water Spots",
    category: "cleaning",
    quickFix: "Clean with a suitable glass cleaner and dry immediately.",
    steps: [
      "Rinse loose dirt away.",
      "Apply a suitable glass-cleaning solution.",
      "Wipe with a clean microfiber cloth.",
      "Dry the glass.",
      "Repeat for stubborn mineral deposits using a compatible method."
    ]
  },

  // 211
  {
    id: 211,
    title: "Bathroom Tiles Look Dull",
    category: "cleaning",
    quickFix: "Clean tile surfaces regularly and remove soap residue.",
    steps: [
      "Remove loose dirt.",
      "Use a suitable tile cleaner.",
      "Scrub gently with a soft brush.",
      "Rinse if required.",
      "Dry the surface."
    ]
  },

  // 212
  {
    id: 212,
    title: "Soap Scum on Bathroom Surfaces",
    category: "cleaning",
    quickFix: "Use a suitable bathroom cleaner and rinse thoroughly.",
    steps: [
      "Wet the surface.",
      "Apply a compatible bathroom cleaner.",
      "Allow it to work according to the product instructions.",
      "Scrub gently.",
      "Rinse and dry."
    ],
    safety: "Never mix household cleaning chemicals unless the product instructions explicitly allow it."
  },

  // 213
  {
    id: 213,
    title: "Dust Comes Back Quickly",
    category: "cleaning",
    quickFix: "Clean from top to bottom and reduce dust sources.",
    steps: [
      "Dust high surfaces first.",
      "Clean floors after surfaces.",
      "Wash bedding regularly.",
      "Keep windows and doors clean.",
      "Replace or clean air filters as recommended."
    ]
  },

  // 214
  {
    id: 214,
    title: "Ceiling Fan Collects Too Much Dust",
    category: "cleaning",
    quickFix: "Clean fan blades regularly using a safe method.",
    steps: [
      "Turn the fan off.",
      "Wait until blades stop.",
      "Use a suitable dusting tool.",
      "Clean each blade carefully.",
      "Remove dust from surrounding surfaces."
    ],
    safety: "Do not stand on an unstable chair or ladder."
  },

  // 215
  {
    id: 215,
    title: "Kitchen Cabinets Feel Sticky",
    category: "cleaning",
    quickFix: "Remove grease using a cleaner suitable for the cabinet material.",
    steps: [
      "Remove loose dirt.",
      "Use a suitable diluted cleaner.",
      "Test on an inconspicuous area first.",
      "Wipe gently.",
      "Dry the surface completely."
    ]
  },

  // 216
  {
    id: 216,
    title: "Microwave Has Food Odor",
    category: "cleaning",
    quickFix: "Clean spills and ventilate the microwave.",
    steps: [
      "Unplug the microwave if the manufacturer recommends it for cleaning.",
      "Wipe internal surfaces with a damp cloth.",
      "Clean the turntable separately.",
      "Remove food residue.",
      "Keep the door open briefly after cleaning."
    ],
    safety: "Never operate a microwave empty for cleaning purposes."
  },

  // 217
  {
    id: 217,
    title: "Fridge Door Seal Is Dirty",
    category: "cleaning",
    quickFix: "Clean the gasket with mild soapy water and dry it.",
    steps: [
      "Open the refrigerator door.",
      "Wipe the gasket with mild soapy water.",
      "Clean folds carefully.",
      "Dry the gasket.",
      "Check that the door seals properly."
    ]
  },

  // 218
  {
    id: 218,
    title: "Shoes Smell Bad",
    category: "cleaning",
    quickFix: "Dry shoes completely and improve ventilation.",
    steps: [
      "Remove insoles if removable.",
      "Allow shoes to dry fully.",
      "Clean according to the shoe manufacturer's instructions.",
      "Rotate between pairs when possible.",
      "Keep shoes in a dry ventilated place."
    ]
  },

  // 219
  {
    id: 219,
    title: "Carpet Has a Bad Smell",
    category: "cleaning",
    quickFix: "Identify the source and clean the affected area.",
    steps: [
      "Vacuum the carpet.",
      "Find the source of the odor.",
      "Use a carpet-safe cleaner.",
      "Allow the carpet to dry completely.",
      "Seek professional cleaning for persistent odors."
    ]
  },

  // 220
  {
    id: 220,
    title: "Mirror Has Streaks After Cleaning",
    category: "cleaning",
    quickFix: "Use a clean microfiber cloth and avoid excess cleaner.",
    steps: [
      "Remove dust first.",
      "Apply a small amount of suitable glass cleaner.",
      "Wipe evenly.",
      "Use a dry microfiber cloth for the final pass.",
      "Avoid cleaning in direct hot sunlight."
    ]
  },

  // 221
  {
    id: 221,
    title: "Loose Screw Keeps Coming Out",
    category: "diy",
    quickFix: "Use the correct screw size and check the hole condition.",
    steps: [
      "Remove the screw.",
      "Inspect the hole.",
      "Use the correct screw type and length.",
      "Tighten firmly without excessive force.",
      "Repair damaged material if the screw cannot grip."
    ]
  },

  // 222
  {
    id: 222,
    title: "Picture Frame Keeps Tilting",
    category: "diy",
    quickFix: "Check the hanging hardware and level the frame carefully.",
    steps: [
      "Remove the frame carefully.",
      "Inspect the hook, wire or hanging hardware.",
      "Check that the wall fixing is secure.",
      "Reposition the hanging point if necessary.",
      "Use a small level to align the frame.",
      "Use hardware suitable for the frame's weight."
    ]
  },

  // 223
  {
    id: 223,
    title: "Drawer Is Hard to Open",
    category: "diy",
    quickFix: "Clean the runners and check alignment.",
    steps: [
      "Remove the drawer.",
      "Clean visible dust from the runners.",
      "Check for objects blocking movement.",
      "Inspect the runners for damage.",
      "Use suitable lubricant if recommended."
    ]
  },

  // 224
  {
    id: 224,
    title: "Drawer Gets Stuck Halfway",
    category: "diy",
    quickFix: "Check for obstructions, runner damage and cabinet alignment.",
    steps: [
      "Remove items that may be blocking the drawer.",
      "Pull the drawer out as far as it safely goes.",
      "Check the runners for visible dirt or damage.",
      "Inspect the cabinet opening for misalignment.",
      "Clean accessible runner surfaces carefully.",
      "Seek repair if the runner or cabinet is damaged."
    ]
  },

  // 225
  {
    id: 225,
    title: "Chair Wobbles",
    category: "diy",
    quickFix: "Check the legs and tighten accessible fasteners.",
    steps: [
      "Place the chair on a flat surface.",
      "Identify the unstable leg.",
      "Tighten accessible screws or bolts.",
      "Check for cracks.",
      "Do not use the chair if structural damage is present."
    ],
    safety: "Do not use a chair with a cracked or structurally damaged frame."
  },

  // 226
  {
    id: 226,
    title: "Table Wobbles",
    category: "diy",
    quickFix: "Check leg fasteners and floor contact.",
    steps: [
      "Place the table on a flat floor.",
      "Tighten accessible fasteners.",
      "Check whether one leg is shorter.",
      "Use a suitable furniture leveler if appropriate.",
      "Repair damaged joints if necessary."
    ]
  },

  // 227
  {
    id: 227,
    title: "Wall Paint Is Peeling",
    category: "diy",
    quickFix: "Find and fix moisture before repainting.",
    steps: [
      "Remove loose paint carefully.",
      "Check for moisture or leaks.",
      "Repair the source of moisture.",
      "Allow the wall to dry completely.",
      "Prime and repaint using suitable products."
    ]
  },

  // 228
  {
    id: 228,
    title: "Small Wall Nail Hole",
    category: "diy",
    quickFix: "Fill the hole with suitable wall filler and repaint.",
    steps: [
      "Clean loose material around the hole.",
      "Apply suitable wall filler.",
      "Allow it to dry.",
      "Sand gently if required.",
      "Apply matching paint."
    ]
  },

  // 229
  {
    id: 229,
    title: "Paint Has Brush Marks",
    category: "diy",
    quickFix: "Use suitable brush technique and avoid overworking drying paint.",
    steps: [
      "Allow the coat to dry fully.",
      "Lightly sand if appropriate.",
      "Remove dust.",
      "Apply a thin even coat.",
      "Use a suitable quality brush or roller."
    ]
  },

  // 230
  {
    id: 230,
    title: "Wall Sticker Is Difficult to Remove",
    category: "diy",
    quickFix: "Warm the adhesive gently and peel slowly.",
    steps: [
      "Test a small hidden area first.",
      "Warm the sticker gently if the surface allows.",
      "Peel slowly from one corner.",
      "Remove remaining adhesive with a surface-safe method.",
      "Clean the wall afterward."
    ]
  },

  // 231
  {
    id: 231,
    title: "Screw Head Is Stripped",
    category: "diy",
    quickFix: "Use the correct screwdriver and avoid excessive force.",
    steps: [
      "Stop turning if the screwdriver slips.",
      "Use the correct screwdriver size.",
      "Try gentle downward pressure.",
      "Use an appropriate screw-removal tool if necessary.",
      "Replace the screw after removal."
    ]
  },

  // 232
  {
    id: 232,
    title: "Furniture Surface Has a Small Scratch",
    category: "diy",
    quickFix: "Clean the area and use a compatible furniture touch-up product.",
    steps: [
      "Clean and dry the surface.",
      "Check the furniture finish.",
      "Use a matching touch-up product.",
      "Apply a small amount first.",
      "Follow the product instructions."
    ]
  },

  // 233
  {
    id: 233,
    title: "Picture Frame Hangs Crooked",
    category: "diy",
    quickFix: "Adjust the hanging point and check it with a level.",
    steps: [
      "Remove the frame safely.",
      "Check the wall hook.",
      "Reposition the hanging point if necessary.",
      "Hang the frame again.",
      "Check alignment from a normal viewing distance."
    ]
  },

  // 234
  {
    id: 234,
    title: "Curtain Rod Keeps Falling",
    category: "diy",
    quickFix: "Use stronger wall fixings appropriate for the wall material.",
    steps: [
      "Remove the rod.",
      "Check whether the mounting holes are damaged.",
      "Identify the wall material.",
      "Install appropriate anchors or fixings.",
      "Do not exceed the fixing's load rating."
    ]
  },

  // 235
  {
    id: 235,
    title: "Door Handle Is Loose",
    category: "diy",
    quickFix: "Tighten the accessible handle screws.",
    steps: [
      "Check the handle mounting screws.",
      "Tighten them gently.",
      "Test the handle.",
      "Check the spindle if the handle remains loose.",
      "Replace damaged hardware if necessary."
    ]
  },

  // 236
  {
    id: 236,
    title: "Plant Soil Stays Wet for Too Long",
    category: "garden",
    quickFix: "Improve drainage and adjust watering to the plant's needs.",
    steps: [
      "Check whether the pot has drainage holes.",
      "Empty standing water from the tray.",
      "Allow the soil to dry to an appropriate level.",
      "Reduce watering frequency if the plant does not need frequent water.",
      "Check whether the soil mix drains properly.",
      "Repot only when necessary and suitable for the plant."
    ],
    safety: "Avoid keeping plant roots in stagnant water for extended periods."
  },

  // 237
  {
    id: 237,
    title: "Plant Leaves Drooping",
    category: "garden",
    quickFix: "Check soil moisture and environmental conditions.",
    steps: [
      "Touch the soil to assess moisture.",
      "Water if the plant's soil is genuinely dry.",
      "Check for excessive water.",
      "Move the plant away from harsh conditions if needed.",
      "Monitor it over the next few days."
    ]
  },

  // 238
  {
    id: 238,
    title: "Plant Soil Stays Wet Too Long",
    category: "garden",
    quickFix: "Improve drainage and reduce unnecessary watering.",
    steps: [
      "Check the pot drainage holes.",
      "Empty standing water from the tray.",
      "Allow the soil to dry appropriately between watering.",
      "Avoid watering on a fixed schedule without checking the soil.",
      "Repot if the soil or container is unsuitable."
    ]
  },

  // 239
  {
    id: 239,
    title: "Plant Growth Is Very Slow",
    category: "garden",
    quickFix: "Check light, water, soil and temperature.",
    steps: [
      "Confirm the plant receives suitable light.",
      "Check soil moisture.",
      "Make sure the pot drains properly.",
      "Check whether the plant needs feeding.",
      "Monitor seasonal growth patterns."
    ]
  },

  // 240
  {
    id: 240,
    title: "Indoor Plant Has Brown Leaf Tips",
    category: "garden",
    quickFix: "Check watering, humidity, fertilizer and light conditions.",
    steps: [
      "Check whether the soil is too dry.",
      "Avoid excessive fertilizer.",
      "Check for very dry air.",
      "Protect the plant from harsh direct sunlight if inappropriate.",
      "Trim damaged tips with clean scissors if desired."
    ]
  },

  // 241
  {
    id: 241,
    title: "Plant Pot Has White Deposits",
    category: "garden",
    quickFix: "Clean mineral deposits and review water and fertilizer use.",
    steps: [
      "Remove visible deposits from the pot surface.",
      "Check whether fertilizer is being overused.",
      "Avoid leaving water standing in the tray.",
      "Use suitable water for the plant if necessary.",
      "Repot if soil buildup is excessive."
    ]
  },

  // 242
  {
    id: 242,
    title: "Garden Soil Becomes Very Hard",
    category: "garden",
    quickFix: "Improve soil structure with suitable organic matter.",
    steps: [
      "Loosen the top layer carefully.",
      "Add suitable organic matter.",
      "Avoid walking repeatedly over planting areas.",
      "Water appropriately.",
      "Observe drainage after improvement."
    ]
  },

  // 243
  {
    id: 243,
    title: "Plants Are Not Flowering",
    category: "garden",
    quickFix: "Check light, plant maturity, nutrition and seasonal conditions.",
    steps: [
      "Check whether the plant receives suitable light.",
      "Avoid excessive nitrogen fertilizer.",
      "Follow the plant's recommended feeding schedule.",
      "Check pruning requirements.",
      "Allow time for seasonal flowering."
    ]
  },

  // 244
  {
    id: 244,
    title: "Leaves Have Small Holes",
    category: "garden",
    quickFix: "Inspect leaves for insects and physical damage.",
    steps: [
      "Check both sides of affected leaves.",
      "Look for visible insects.",
      "Remove badly damaged leaves if appropriate.",
      "Use a plant-safe pest-control method when needed.",
      "Monitor new growth."
    ]
  },

  // 245
  {
    id: 245,
    title: "Plant Has Tiny Insects",
    category: "garden",
    quickFix: "Isolate the affected plant and identify the pest.",
    steps: [
      "Move the plant away from other plants.",
      "Inspect leaves and stems.",
      "Wash pests away when suitable.",
      "Use a plant-safe treatment according to its label.",
      "Repeat monitoring regularly."
    ]
  },

  // 246
  {
    id: 246,
    title: "Garden Weeds Grow Quickly",
    category: "garden",
    quickFix: "Remove weeds early and improve ground cover.",
    steps: [
      "Pull young weeds carefully.",
      "Remove roots where possible.",
      "Avoid allowing weeds to seed.",
      "Use mulch where suitable.",
      "Maintain garden beds regularly."
    ]
  },

  // 247
  {
    id: 247,
    title: "Grass Has Bare Patches",
    category: "garden",
    quickFix: "Check sunlight, soil, water and foot traffic.",
    steps: [
      "Remove dead material.",
      "Loosen the soil lightly.",
      "Reseed with suitable grass if appropriate.",
      "Water according to the seed instructions.",
      "Reduce heavy foot traffic during establishment."
    ]
  },

  // 248
  {
    id: 248,
    title: "Potted Plant Is Root Bound",
    category: "garden",
    quickFix: "Consider moving the plant to a slightly larger suitable container.",
    steps: [
      "Check whether roots are densely circling the pot.",
      "Choose a container only moderately larger.",
      "Use suitable fresh potting mix.",
      "Move the plant carefully.",
      "Water according to the plant's requirements."
    ]
  },

  // 249
  {
    id: 249,
    title: "Seeds Are Not Germinating",
    category: "garden",
    quickFix: "Check seed age, moisture, temperature and planting depth.",
    steps: [
      "Check the seed packet instructions.",
      "Use fresh suitable seeds.",
      "Keep the growing medium appropriately moist.",
      "Maintain suitable temperature.",
      "Avoid planting too deeply."
    ]
  },

  // 250
  {
    id: 250,
    title: "Plants Get Damaged by Strong Wind",
    category: "garden",
    quickFix: "Protect vulnerable plants and provide suitable support.",
    steps: [
      "Move potted plants to a sheltered location.",
      "Support tall plants with suitable stakes.",
      "Remove dead or weak branches.",
      "Avoid placing unstable pots in exposed areas.",
      "Check plants after storms."
    ]
  },

  // 251
  {
    id: 251,
    title: "Calculate Percentage Increase",
    category: "tools",
    quickFix: "Use the formula: ((new value - old value) / old value) × 100.",
    steps: [
      "Enter the original value.",
      "Enter the new value.",
      "Subtract the original value from the new value.",
      "Divide the difference by the original value.",
      "Multiply by 100."
    ]
  },

  // 252
  {
    id: 252,
    title: "Calculate Percentage Decrease",
    category: "tools",
    quickFix: "Use the formula: ((old value - new value) / old value) × 100.",
    steps: [
      "Enter the original value.",
      "Enter the new value.",
      "Subtract the new value from the original value.",
      "Divide by the original value.",
      "Multiply by 100."
    ]
  },

  // 253
  {
    id: 253,
    title: "Calculate Discount Amount",
    category: "tools",
    quickFix: "Multiply the original price by the discount percentage and divide by 100.",
    steps: [
      "Enter the original price.",
      "Enter the discount percentage.",
      "Calculate price × discount ÷ 100.",
      "Subtract the discount amount from the original price.",
      "The result is the discounted price."
    ]
  },

  // 254
  {
    id: 254,
    title: "Calculate Final Price After Discount",
    category: "tools",
    quickFix: "Subtract the discount amount from the original price.",
    steps: [
      "Enter the original price.",
      "Enter the discount percentage.",
      "Calculate the discount amount.",
      "Subtract it from the original price.",
      "Check the final amount."
    ]
  },

  // 255
  {
    id: 255,
    title: "Calculate Average",
    category: "tools",
    quickFix: "Add all values and divide by the number of values.",
    steps: [
      "List all numbers.",
      "Add them together.",
      "Count the numbers.",
      "Divide the total by the count.",
      "The result is the average."
    ]
  },

  // 256
  {
    id: 256,
    title: "Calculate Simple Interest",
    category: "tools",
    quickFix: "Use SI = Principal × Rate × Time ÷ 100.",
    steps: [
      "Enter the principal amount.",
      "Enter the annual interest rate.",
      "Enter the time period.",
      "Multiply principal × rate × time.",
      "Divide the result by 100."
    ]
  },

  // 257
  {
    id: 257,
    title: "Calculate Profit",
    category: "tools",
    quickFix: "Profit equals selling price minus cost price.",
    steps: [
      "Enter the cost price.",
      "Enter the selling price.",
      "Subtract cost price from selling price.",
      "A positive result means profit.",
      "Compare the result with the original cost."
    ]
  },

  // 258
  {
    id: 258,
    title: "Calculate Loss",
    category: "tools",
    quickFix: "Loss equals cost price minus selling price.",
    steps: [
      "Enter the cost price.",
      "Enter the selling price.",
      "Subtract selling price from cost price.",
      "A positive result indicates a loss.",
      "Use the result for further percentage calculations if needed."
    ]
  },

  // 259
  {
    id: 259,
    title: "Calculate Profit Percentage",
    category: "tools",
    quickFix: "Profit percentage = profit ÷ cost price × 100.",
    steps: [
      "Calculate the profit.",
      "Divide profit by cost price.",
      "Multiply by 100.",
      "Check the result."
    ]
  },

  // 260
  {
    id: 260,
    title: "Calculate BMI",
    category: "tools",
    quickFix: "BMI is calculated from weight and height.",
    steps: [
      "Measure weight in kilograms.",
      "Measure height in metres.",
      "Square the height.",
      "Divide weight by height squared.",
      "Use BMI only as a general screening measure."
    ],
    disclaimer: "BMI is not a diagnosis and does not replace professional medical advice."
  },

  // 261
  {
    id: 261,
    title: "Convert Kilometres to Miles",
    category: "tools",
    quickFix: "Multiply kilometres by approximately 0.621371.",
    steps: [
      "Enter the distance in kilometres.",
      "Multiply by 0.621371.",
      "The result is approximately the distance in miles."
    ]
  },

  // 262
  {
    id: 262,
    title: "Convert Miles to Kilometres",
    category: "tools",
    quickFix: "Multiply miles by approximately 1.60934.",
    steps: [
      "Enter the distance in miles.",
      "Multiply by 1.60934.",
      "The result is approximately the distance in kilometres."
    ]
  },

  // 263
  {
    id: 263,
    title: "Convert Celsius to Fahrenheit",
    category: "tools",
    quickFix: "Use °F = (°C × 9/5) + 32.",
    steps: [
      "Enter the Celsius temperature.",
      "Multiply by 9/5.",
      "Add 32.",
      "The result is Fahrenheit."
    ]
  },

  // 264
  {
    id: 264,
    title: "Convert Fahrenheit to Celsius",
    category: "tools",
    quickFix: "Use °C = (°F - 32) × 5/9.",
    steps: [
      "Enter the Fahrenheit temperature.",
      "Subtract 32.",
      "Multiply by 5/9.",
      "The result is Celsius."
    ]
  },

  // 265
  {
    id: 265,
    title: "Calculate Age in Months",
    category: "tools",
    quickFix: "Approximate total months by multiplying completed years by 12 and adding remaining months.",
    steps: [
      "Calculate completed years.",
      "Multiply years by 12.",
      "Add completed additional months.",
      "For exact age, use the date-based Age Calculator."
    ]
  },

  // 266
  {
    id: 266,
    title: "Calculate Days Between Two Dates",
    category: "tools",
    quickFix: "Use a date calculator to compare the two dates.",
    steps: [
      "Enter the starting date.",
      "Enter the ending date.",
      "Calculate the difference.",
      "Check whether the result should include or exclude the start date."
    ]
  },

  // 267
  {
    id: 267,
    title: "Calculate Monthly Savings",
    category: "tools",
    quickFix: "Divide your target savings by the number of months available.",
    steps: [
      "Set a savings target.",
      "Choose the number of months.",
      "Divide the target by the number of months.",
      "Set aside approximately that amount each month.",
      "Review the plan regularly."
    ]
  },

  // 268
  {
    id: 268,
    title: "Calculate Electricity Usage",
    category: "tools",
    quickFix: "Energy in kWh can be estimated from appliance power and usage time.",
    steps: [
      "Find appliance power in watts.",
      "Convert watts to kilowatts.",
      "Multiply by hours of use.",
      "The result is approximate energy consumption in kWh.",
      "Use your electricity tariff to estimate cost."
    ]
  },

  // 269
  {
    id: 269,
    title: "Estimate Electricity Cost",
    category: "tools",
    quickFix: "Multiply estimated energy usage by the applicable electricity rate.",
    steps: [
      "Calculate energy usage in kWh.",
      "Find your applicable electricity tariff.",
      "Multiply usage by the rate.",
      "Add applicable fixed charges separately.",
      "Compare with your actual bill."
    ],
    disclaimer: "Actual electricity bills may include slabs, taxes, fixed charges and other fees."
  },

  // 270
  {
    id: 270,
    title: "Calculate Fuel Cost for a Trip",
    category: "tools",
    quickFix: "Estimate fuel required from distance and vehicle mileage.",
    steps: [
      "Enter the trip distance.",
      "Enter the vehicle's approximate mileage.",
      "Divide distance by mileage to estimate fuel needed.",
      "Multiply fuel needed by fuel price.",
      "Keep a small allowance for traffic and route differences."
    ]
  },

  // 271
  {
    id: 271,
    title: "Basic Birth Chart Information",
    category: "astrology",
    quickFix: "Use birth date, approximate birth time and birth location for a general astrology reference.",
    steps: [
      "Record the birth date.",
      "Record the birth time as accurately as possible.",
      "Record the birth location.",
      "Use a reputable astrology calculation system.",
      "Treat the result as general guidance or entertainment."
    ],
    disclaimer: "Astrology is not scientifically established as a method for guaranteed predictions or professional advice."
  },

  // 272
  {
    id: 272,
    title: "General Zodiac Sign Guide",
    category: "astrology",
    quickFix: "Use the birth date to identify the commonly used Western zodiac sign.",
    steps: [
      "Find the person's birth date.",
      "Compare it with standard zodiac date ranges.",
      "Identify the corresponding sign.",
      "Use sign descriptions only as general entertainment.",
      "Avoid making important decisions solely from astrology."
    ],
    disclaimer: "Astrology content is provided for general guidance and entertainment."
  },

  // 273
  {
    id: 273,
    title: "General Astrology Compatibility",
    category: "astrology",
    quickFix: "Compare commonly used zodiac characteristics as entertainment.",
    steps: [
      "Identify both zodiac signs.",
      "Review general characteristics.",
      "Consider communication and personal values.",
      "Use astrology only as a fun discussion topic.",
      "Base important relationship decisions on real communication and circumstances."
    ],
    disclaimer: "Astrology cannot guarantee relationship compatibility."
  },

  // 274
  {
    id: 274,
    title: "Lucky Number Guidance",
    category: "astrology",
    quickFix: "Numerology-style lucky numbers can be used as entertainment.",
    steps: [
      "Choose the numerology method.",
      "Calculate the number according to that method.",
      "Record the resulting number.",
      "Treat it as entertainment rather than fact."
    ],
    disclaimer: "Numerology and lucky-number interpretations are not scientifically proven predictions."
  },

  // 275
  {
    id: 275,
    title: "Daily Horoscope Guidance",
    category: "astrology",
    quickFix: "Read horoscopes as entertainment rather than guaranteed forecasts.",
    steps: [
      "Identify the relevant zodiac sign.",
      "Read the daily horoscope.",
      "Treat broad statements as general entertainment.",
      "Do not use horoscope predictions as a substitute for professional advice."
    ],
    disclaimer: "Horoscopes are general entertainment and are not guaranteed predictions."
  },

  // 276
  {
    id: 276,
    title: "Property Document Checklist",
    category: "property",
    quickFix: "Collect and verify essential property documents before a transaction.",
    steps: [
      "Collect the title or ownership documents.",
      "Check relevant registration records.",
      "Review tax or revenue records where applicable.",
      "Verify identity and ownership details.",
      "Have documents reviewed by a qualified local professional."
    ],
    disclaimer: "This is a general checklist, not legal advice. Requirements vary by location and transaction."
  },

  // 277
  {
    id: 277,
    title: "Land Purchase Basic Checklist",
    category: "property",
    quickFix: "Verify ownership, records, access and applicable restrictions before purchasing land.",
    steps: [
      "Verify the seller's ownership.",
      "Check official land records.",
      "Check for known liens or disputes where records are available.",
      "Confirm access and permitted land use.",
      "Seek qualified legal and local professional advice before payment."
    ],
    disclaimer: "Property laws and document requirements vary by location."
  },

  // 278
  {
    id: 278,
    title: "Property Boundary Verification Checklist",
    category: "property",
    quickFix: "Compare official records with the physical boundary.",
    steps: [
      "Obtain the relevant official land record or map.",
      "Identify boundary markers.",
      "Compare measurements where appropriate.",
      "Use a qualified surveyor when accuracy is important.",
      "Resolve discrepancies before completing a transaction."
    ],
    disclaimer: "Do not rely solely on informal measurements for legal property boundaries."
  },

  // 279
  {
    id: 279,
    title: "Property Sale Preparation Checklist",
    category: "property",
    quickFix: "Organize ownership and property records before listing a property.",
    steps: [
      "Collect ownership documents.",
      "Collect applicable tax or utility records.",
      "Check outstanding dues.",
      "Prepare identity documents required by the transaction.",
      "Consult a qualified professional regarding local requirements."
    ],
    disclaimer: "Local legal and registration requirements can differ."
  },

  // 280
  {
    id: 280,
    title: "House Rental Checklist",
    category: "property",
    quickFix: "Inspect the property and document important terms before renting.",
    steps: [
      "Inspect rooms, plumbing and electrical fixtures.",
      "Record existing damage with photos if appropriate.",
      "Confirm rent and deposit terms.",
      "Read the rental agreement carefully.",
      "Keep copies of signed documents and receipts."
    ],
    disclaimer: "Rental laws and agreement requirements vary by location."
  },

  // 281
  {
    id: 281,
    title: "Property Inspection Checklist",
    category: "property",
    quickFix: "Inspect structure, water, electricity, access and visible defects.",
    steps: [
      "Inspect walls and ceilings for visible damage.",
      "Check doors and windows.",
      "Check water supply and drainage.",
      "Check electrical fixtures visually.",
      "Consider a professional inspection for major purchases."
    ]
  },

  // 282
  {
    id: 282,
    title: "Land Record Verification",
    category: "property",
    quickFix: "Compare seller-provided documents with the relevant official land records.",
    steps: [
      "Identify the appropriate local land-record authority.",
      "Obtain the relevant record.",
      "Compare owner name and property details.",
      "Check measurements and classification where applicable.",
      "Seek professional advice if information does not match."
    ],
    disclaimer: "Official procedures vary by state, district and country."
  },

  // 283
  {
    id: 283,
    title: "Property Tax Record Checklist",
    category: "property",
    quickFix: "Check applicable property-tax records and outstanding amounts.",
    steps: [
      "Identify the local tax authority.",
      "Check the property assessment details.",
      "Review outstanding dues.",
      "Keep receipts or official records.",
      "Verify the latest information before a transaction."
    ]
  },

  // 284
  {
    id: 284,
    title: "Property Document Name Mismatch",
    category: "property",
    quickFix: "Do not ignore differences in names across important documents.",
    steps: [
      "List the documents containing the mismatch.",
      "Check whether it is a spelling or identity issue.",
      "Collect supporting identity documents.",
      "Ask the relevant authority or qualified professional about correction procedures.",
      "Complete corrections before relying on the documents."
    ],
    disclaimer: "Document correction procedures depend on local law and authorities."
  },

  // 285
  {
    id: 285,
    title: "Basic Marriage Planning Checklist",
    category: "marriage",
    quickFix: "Plan budget, date, venue, guests and required documents early.",
    steps: [
      "Set a realistic budget.",
      "Choose a tentative date.",
      "Prepare the guest list.",
      "Book venue and important services.",
      "Check applicable marriage-registration requirements."
    ]
  },

  // 286
  {
    id: 286,
    title: "Marriage Budget Checklist",
    category: "marriage",
    quickFix: "Divide the budget into essential and optional expenses.",
    steps: [
      "Set the total budget.",
      "List venue expenses.",
      "List food, clothing, photography and decoration costs.",
      "Keep an emergency reserve.",
      "Track actual spending against the plan."
    ]
  },

  // 287
  {
    id: 287,
    title: "Wedding Guest List Planning",
    category: "marriage",
    quickFix: "Group guests by family, friends and other important categories.",
    steps: [
      "Create an initial list.",
      "Divide guests into groups.",
      "Check venue capacity.",
      "Confirm invitations.",
      "Track responses."
    ]
  },

  // 288
  {
    id: 288,
    title: "Marriage Compatibility Guidance",
    category: "marriage",
    quickFix: "Consider communication, values, finances, expectations and mutual respect.",
    steps: [
      "Discuss long-term goals.",
      "Discuss finances and responsibilities.",
      "Discuss family expectations.",
      "Discuss communication and conflict resolution.",
      "Make decisions together based on real circumstances."
    ],
    disclaimer: "Compatibility cannot be guaranteed by astrology or any simple scoring system."
  },

  // 289
  {
    id: 289,
    title: "Pre-Marriage Discussion Checklist",
    category: "marriage",
    quickFix: "Discuss important life expectations before marriage.",
    steps: [
      "Discuss where you plan to live.",
      "Discuss financial responsibilities.",
      "Discuss career expectations.",
      "Discuss family responsibilities.",
      "Discuss personal boundaries and communication."
    ]
  },

  // 290
  {
    id: 290,
    title: "Wedding Invitation Checklist",
    category: "marriage",
    quickFix: "Confirm names, date, time, venue and contact details before sending.",
    steps: [
      "Check spelling of names.",
      "Confirm date and time.",
      "Confirm venue address.",
      "Add contact information if required.",
      "Proofread the invitation before printing or sending."
    ]
  },

  // 291
  {
    id: 291,
    title: "Wedding Vendor Checklist",
    category: "marriage",
    quickFix: "Compare vendors based on price, availability, reviews and written terms.",
    steps: [
      "List required vendors.",
      "Compare multiple options.",
      "Confirm availability.",
      "Review pricing and inclusions.",
      "Keep written agreements and payment records."
    ]
  },

  // 292
  {
    id: 292,
    title: "Wedding Day Emergency Kit",
    category: "marriage",
    quickFix: "Prepare a small kit with basic useful items.",
    steps: [
      "Pack safety pins.",
      "Pack tissues.",
      "Carry basic sewing supplies.",
      "Carry chargers or power banks.",
      "Keep essential documents and contact numbers accessible."
    ]
  },

  // 293
  {
    id: 293,
    title: "Marriage Registration Preparation",
    category: "marriage",
    quickFix: "Check the current official requirements in your jurisdiction.",
    steps: [
      "Identify the relevant registration authority.",
      "Check the latest document requirements.",
      "Prepare required identity and address documents.",
      "Confirm appointment or witness requirements if applicable.",
      "Keep copies of submitted documents and receipts."
    ],
    disclaimer: "Marriage registration rules vary by jurisdiction. Verify requirements with the appropriate official authority."
  },

  // 294
  {
    id: 294,
    title: "Wedding Timeline Planning",
    category: "marriage",
    quickFix: "Create a timeline for bookings, invitations and final preparations.",
    steps: [
      "Set the wedding date.",
      "Book major services early.",
      "Send invitations with enough notice.",
      "Confirm vendors before the event.",
      "Prepare a final-day schedule."
    ]
  },

  // 295
  {
    id: 295,
    title: "Wedding Expense Tracking",
    category: "marriage",
    quickFix: "Record every payment and compare it with the planned budget.",
    steps: [
      "Create expense categories.",
      "Record each payment.",
      "Track deposits and remaining balances.",
      "Review the total regularly.",
      "Keep receipts and agreements."
    ]
  },

  // 296
  {
    id: 296,
    title: "Emergency Contact Checklist",
    category: "home",
    quickFix: "Keep important emergency numbers easily accessible.",
    steps: [
      "Save local emergency services numbers.",
      "Save family emergency contacts.",
      "Keep medical contact information where appropriate.",
      "Keep utility emergency numbers.",
      "Make sure trusted household members know where the information is."
    ]
  },

  // 297
  {
    id: 297,
    title: "Home Emergency Kit Checklist",
    category: "home",
    quickFix: "Keep basic emergency supplies together in an accessible location.",
    steps: [
      "Keep a flashlight.",
      "Keep spare batteries where appropriate.",
      "Keep basic first-aid supplies.",
      "Keep drinking water and essential supplies as appropriate.",
      "Check the kit periodically."
    ]
  },

  // 298
  {
    id: 298,
    title: "Home Safety Inspection Checklist",
    category: "home",
    quickFix: "Regularly check common household safety risks.",
    steps: [
      "Check electrical cables for visible damage.",
      "Keep walkways clear.",
      "Check smoke or fire alarms where installed.",
      "Keep gas appliances maintained professionally.",
      "Store hazardous materials safely."
    ],
    safety: "Do not attempt dangerous electrical, gas or structural repairs yourself."
  },

  // 299
  {
    id: 299,
    title: "Daily Household Cleaning Checklist",
    category: "cleaning",
    quickFix: "Focus on high-use areas for a simple daily cleaning routine.",
    steps: [
      "Clear clutter.",
      "Clean kitchen surfaces.",
      "Wash or organize dishes.",
      "Clean frequently touched surfaces.",
      "Sweep or vacuum high-use areas."
    ]
  },

  // 300
  {
    id: 300,
    title: "Monthly Home Maintenance Checklist",
    category: "home",
    quickFix: "Perform simple checks regularly to catch small problems early.",
    steps: [
      "Check visible plumbing leaks.",
      "Inspect doors and windows.",
      "Clean fans and accessible vents.",
      "Check electrical accessories for visible damage.",
      "Review emergency supplies and important contact numbers."
    ],
    safety: "For electrical, gas, structural or major plumbing problems, use a qualified professional."
  }
];
