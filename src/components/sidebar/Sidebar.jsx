import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity

} from "@material-ui/icons";
import EcoIcon from '@material-ui/icons/Eco';
import { Link } from "react-router-dom";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import BlockIcon from '@material-ui/icons/Block';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <Link to="/transactions" className="link">
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Transactions
            </li>
            </Link>
            <Link to="/states" className="link">
              <li className="sidebarListItem">
                <AddLocationIcon className="sidebarIcon" />
                Add Districts / Villages 
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <EcoIcon className="sidebarIcon" />
                Crops
              </li>
            </Link>
            <Link to="/blockuser" className="link">
              <li className="sidebarListItem">
                <BlockIcon className="sidebarIcon" />
                Block User
              </li>
            </Link>
            <Link to="/activeusers" className="link">
              <li className="sidebarListItem">
                <VerifiedUserIcon className="sidebarIcon" />
                Active Users
              </li>
            </Link>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu"> 
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>*/}
      </div>
    </div>
  );
}
