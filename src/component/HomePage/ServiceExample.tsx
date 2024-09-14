import { Stack, Typography } from "@mui/material";

const textStyle = {
  color: "white" as const,
  textAlign: "center" as const,
};

export const ServiceExample = () => {
  return (
    <Stack bgcolor={"#7B7B7B"} p={"12px"}>
      <Typography style={{ ...textStyle, fontSize: "24px", fontWeight: 700 }}>
        全方位服務
      </Typography>
      <Typography style={{ ...textStyle }}>
        熱交換器-維特利 Plate Heat Exchanger
      </Typography>
      <Typography style={{ ...textStyle }}>
        提供免費板式熱交換器效能現場評估及專業的工作狀況選機設計。
      </Typography>
      <Typography style={{ ...textStyle }}>
        另外也提供客戶在廠內進行"組合型板式熱交換器"的拆解，從板片清洗、密封圈更換、至重新組裝測壓等作業，
      </Typography>
      <Typography style={{ ...textStyle }}>
        為客戶的維修保養作業提供專業及快速的服務。
      </Typography>
      <Typography style={{ ...textStyle }}>
        備品項目供應，產品包括世界各知名品牌；
      </Typography>
      <Typography style={{ ...textStyle }}>
        如Alfa
        Laval、GEA、SWEP、Tranter、Mueller、APV、Sondex、API、Vicarb、Thermowave、
      </Typography>
      <Typography style={{ ...textStyle }}>
        Funke、Hisaka、Danfoss、Kaori、REHEAT…..等各種型號替換板片、墊圈。
      </Typography>
    </Stack>
  );
};
