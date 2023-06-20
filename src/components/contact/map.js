import { Box } from "@mui/material";
import BodyText from "../Common/BodyContent";
import { PrimaryHeader } from "../Common/Header";

const Map = () => {
  return (
    <Box
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <PrimaryHeader
        title={[
          { text: "FIND", underline: true },
          { text: " US", underline: false },
          { text: " ON", underline: false },
          { text: "GOOGLE", underline: false },
          { text: " MAPS", underline: false },
        ]}
        margin={true}
        subtitle="We are located 2 minutes from kaushambi Metro Station and 5 minutes from Anand Vihar metro station / bus station."
      />
      <iframe
        width="90%"
        height="500"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=spraxa%20solutions%20kaushambi%20&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </Box>
  );
};

export default Map;
