import { BrowserRouter, Route, Switch } from "react-router-dom";
import Drag from "./router/Drag";
import Home from "./router/Home";
import Outline from "./router/Outline";
import Overlay from "./router/Overlay";
import OverlayPlus from "./router/OverlayPlus";
import PrisonBox from "./router/PrisonBox";
import Scroll from "./router/Scroll";
import Slider from "./router/Slider";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/drag"}>
          <Drag />
        </Route>

        <Route path={"/outline"}>
          <Outline />
        </Route>
        <Route path={"/overlay"}>
          <Overlay />
        </Route>
        <Route path={"/overlayplus"}>
          <OverlayPlus />
        </Route>
        <Route path={"/prisonbox"}>
          <PrisonBox />
        </Route>
        <Route path={"/scroll"}>
          <Scroll />
        </Route>
        <Route path={"/slider"}>
          <Slider />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
