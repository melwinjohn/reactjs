import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Piechart from "../../components/piechart/Piechart";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <Piechart title="Use Types"></Piechart>
      <div className="homeWidgets">        
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
