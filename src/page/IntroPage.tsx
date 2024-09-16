import { Divider, Stack, Typography } from "@mui/material";
import { MainWrapper } from "../layout/MainWrapper";

const titleStyle = {
  fontWeight: 700,
  fontSize: "20px",
  mb: "8px",
};
const subTitleStyle = {
  fontWeight: 700,
  fontSize: "16px",
};
const captionStyle = {
  fontSize: "12px",
  lineHeight: "21px",
};

const dividerStyle = {
  m: "16px 0",
};

const productText = [
  "維特利VEITALI-熱交換器運用專業的設計概念，讓板式熱交換器及硬銲式換熱器安裝在您的工況下，達到體積最小、效率最高的特點。",
  "維特利Plate Heat Exchanger提供您不僅環保節能、更讓您的空間利用率大幅提升。",
  "產品包含硬銲型板式熱交換器、可拆式板式熱交換器，並且提供各廠牌板式熱交換器之清洗維護，維特利供應各廠牌OEM之板片與墊圈，方便使用者在最快的速度下取得與原廠相同等級之備品。",
];

const advantageLits = [
  {
    title: "適合腐蝕性流體",
    description:
      "因應腐蝕性流體，板式熱交換器可以選用鎳銲接而達到耐腐蝕的效果，是腐蝕性流體之首選。",
  },
  {
    title: "適合高壓力流體",
    description:
      "板式熱交換器之耐壓可以針對不同流體作客製，多數機種出廠耐壓已達到工作壓力45bar。",
  },
  {
    title: "熱傳效果佳",
    description:
      "所有產品皆具備精巧的板片設計，使流體可以在有限的空間中，得到最大的接觸面積，使板式熱交換 器發揮出最大的換熱效果。",
  },
  {
    title: "連續高溫運轉",
    description: "板式熱交換器運用SUS316之材料，可以讓其連續運轉溫度達200℃。",
  },
  {
    title: "提升空間利用率",
    description:
      "板式熱交換器因接觸表面積遠大於一般殼管式熱交換器，故兩者在相同熱傳導能力下，板式熱交換器的體積約只有殼管式的1/5大，不僅方便安裝，還可提升空間利用率。",
  },
];

const applicationLists = [
  {
    title: "煉鋼廠 Steel",
    description:
      "煉焦爐直接或間接一次冷卻、閉路冷卻水系統、冷卻爐體和各種設備用（帶材熱軋機、閉坏機帶材冷軋機、薄鋼帶軋機的潤滑和齒輪油冷卻）電弧 爐體、水冷蓋板、鈦合金爐體、電板支座、變壓器的冷卻、冷卻淬火油、電鍍液等工作介質",
  },
  {
    title: "石化工業 Pertrifaction Industry",
    description:
      "各種油品的加熱、冷卻、塔頂氣體的冷卻、冷凝、工廠酸性水處理、粗油冷卻、去除脫鹽裝置、淡水蒸餾、石油、天然氣輸送系統中：原油加熱、 氣體脫水、海洋鑽油平台上；海水冷卻回圈淡水或乙二醇、三甘醇脫水時進行熱回收以及冷卻、電鍍作業之介質的加熱冷卻",
  },
  {
    title: "化學工業 Chemical",
    description:
      "各種無機酸、鹽的加熱、冷卻、蒸發、冷凝；硫酸、磷酸、甲醛水的冷卻；各種電解液（聚合物、塗料、添加劑等）的加熱、冷卻；閉路冷卻水 系統；精細化工產品、生物製品、化妝品的生產；酒精發酵、氨合成、樹脂合成、製造氧化鈦、製造橡膠等",
  },
  {
    title: "食品加工業 Food",
    description:
      "製鹽、乳品、醬油、醋、動植物油品的生產製程的加熱、殺菌、冷卻作業；啤酒製造過程的麥芽加熱、冷卻；明膠的濃縮、殺菌、冷卻作業；谷 氨酸鈉的製造。",
  },
  {
    title: "機電工業 Mechanical Engineering",
    description:
      "各種焠火液、設備潤滑油、偶合器液力油、乳化劑等之冷卻；燃料油、酸洗池、磷化作業線加熱；各種軋機、擠出機的冷卻。",
  },
  {
    title: "印染業 Printing & Dyeing",
    description: "水加熱器及空調系統、印染液的加熱及熱回收作業",
  },
  {
    title: "船舶業Marine",
    description:
      "中央冷卻器（淡水冷卻器）、柴油機發動機冷卻器、潤滑油冷卻器、水加熱和集中空調、閃蒸器（海水淡化設備）。",
  },
  {
    title: "製藥業 Pharmacy",
    description: "製程設備冷卻；各種藥液、純水的加熱、冷卻、蒸發、冷凝、殺菌",
  },
  {
    title: "造紙業 Paper Making",
    description:
      "冷卻：黑水、漂白用鹽、氫氧化鈉水溶液；鹼液的加熱、冷卻；玻璃紙廢液的熱回收、漂白紙張的廢液回收；加熱蒸煮鹼、苛化液、排水與水漿 的濃縮。",
  },
  {
    title: "製糖/飲料業 Sugar",
    description:
      "原果汁加熱、果漿水加熱、萃取水加熱、碳酸汽果汁加熱、濃果汁加熱、糖漿加熱、稀果汁加熱、果汁濃縮。",
  },
  {
    title: "暖通 HVAC",
    description: "中央空調系統、換熱站（集中供暖、供冷）、熱泵系統。",
  },
  {
    title: "常規應用 Popular Application",
    description:
      "中央冷卻系統、中央空調系統、透平用油冷卻器、工廠冷卻水循環系統、工廠氣體淨化系統、製程設備輔助冷卻系統。",
  },
  {
    title: "其他 Others",
    description: "核動力、海水淡化、電廠、煉鋁廠、氧化鋁廠、煉銅廠。",
  },
];
export const IntroPage = () => {
  return (
    <MainWrapper>
      <Typography sx={{ ...titleStyle }}>維特利產品</Typography>
      {productText.map((text) => (
        <Typography sx={{ ...captionStyle }}>{text}</Typography>
      ))}
      <Divider sx={{ ...dividerStyle }} />
      {/* --------------------------------產品-------------------------------------------- */}
      <Typography sx={{ ...titleStyle }}>使用場合</Typography>
      <Typography sx={{ ...captionStyle }}>
        空調冰水機、熱泵系統、冷凍、製程冷熱交換、石化廠、生質柴油、鋼鐵廠、汙水處理、電廠、生物製藥廠、食品、造紙廠、船舶、機械製造業、
        廢熱回收、熱處理、高週波、電鍍設備、儲冰槽。
      </Typography>
      <Divider sx={{ ...dividerStyle }} />
      {/* --------------------------------使用場合-------------------------------------------- */}
      <Typography sx={{ ...titleStyle }}>板式熱交換器的優勢</Typography>
      {advantageLits.map((list) => (
        <Stack mb={"8px"}>
          <Stack direction={"row"} alignItems={"center"}>
            <i
              className="fa-solid fa-circle"
              style={{ fontSize: "8px", marginRight: "12px" }}
            />
            <Typography sx={{ ...subTitleStyle }}>{list.title}</Typography>
          </Stack>

          <Typography sx={{ ...captionStyle, ml: "20px" }}>
            {list.description}
          </Typography>
        </Stack>
      ))}

      <Divider sx={{ ...dividerStyle }} />
      {/* --------------------------------板式熱交換器的優勢-------------------------------------------- */}
      <Typography sx={{ ...titleStyle }}>熱交換器的應用</Typography>
      <Typography sx={{ ...captionStyle }}>
        板式熱交換器以其突出的優點：如傳熱效率高、節能、經濟、結構緊湊、拆裝、清洗、操作靈活方便等，已被廣泛運用於化工、石油、冶金、電力、
        造紙、船舶、機電、集中供暖、餘熱利用、核工業、食品飲料、醫藥、紡織等各行業領域。介質從普通水到高黏度的非牛頓液體；從含固體小顆粒物
        料到含有少量纖維的物料；從水蒸氣到各種氣體；從無腐蝕性到強腐蝕性的各種介質均能處理。主要完成液液、氣液、汽液、氣氣（汽）之間的加熱
        、冷卻、蒸發、冷凝、結晶、脫氣、乾燥、殺菌等工藝過程。
      </Typography>
      {applicationLists.map((list) => (
        <Stack mb={"16px"}>
          <Typography sx={{ ...subTitleStyle, color: "#2894FF" }}>
            {list.title}
          </Typography>
          <Typography sx={{ ...captionStyle }}>{list.description}</Typography>
        </Stack>
      ))}
    </MainWrapper>
  );
};
