import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Crop Addition</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Crop</th>
          <th className="widgetLgTh">Description</th>         
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/X56wRY0/brinjal-new.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Brinjal</span>
          </td>
          <td className="widgetLgDate">Eggplant (US, Australia, New Zealand, anglophone Canada), aubergine (UK, Ireland and Quebec)</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/wrNyNfg/potato-new.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Potato</span>
          </td>
          <td className="widgetLgDate">The potato is a vegetable native to the Americas, a starchy tuber of the plant Solanum tuberosum</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/bWTZ6qp/wheat.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Wheat</span>
          </td>
          <td className="widgetLgDate">Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food.</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.ibb.co/Kq77Q14/paddy.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Paddy</span>
          </td>
          <td className="widgetLgDate">Paddy, also called rice paddy, small, level, flooded field used to cultivate rice in southern and eastern Asia.</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
