export type Solution = {
  id: number;
  title: string;
  category: string;
  quickFix: string;
  steps: string[];
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
  }
];
