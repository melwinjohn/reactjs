import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ankita</span>
            <span className="widgetSmUserTitle">Buyer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Melwin</span>
            <span className="widgetSmUserTitle">Buyer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Avinash</span>
            <span className="widgetSmUserTitle">Farmer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
         
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Senthilak</span>
            <span className="widgetSmUserTitle">Farmer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>        
      </ul>
    </div>
  );
}
