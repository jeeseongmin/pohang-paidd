import { useEffect, useState } from "react";

function useSetting(type) {
  const [setting, setSetting] = useState(null);
  console.log("setting!", setting);
  useEffect(() => {
    return init();
  }, []);

  const init = async () => {
    console.log("init", type);
    if (type === "business") {
      await setSetting({
        subtitle: "1",
        routeToText: "",
        writeUrl: "",
      });
    } else if (type === "") {
      await setSetting({
        subtitle: "2",
        routeToText: "",
        writeUrl: "",
      });
    } else {
      await setSetting({
        subtitle: "3",
        routeToText: "",
        writeUrl: "",
      });
    }
    return [setting, setSetting];
  };

  return [setting, setSetting];
}

export default useSetting;
