import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import facebook from "../images/social/facebook.png";
import twitter from "../images/social/twitter.png";
import linkedIn from "../images/social/linkedin.png";
import { Link } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { Services } from "../utils/uiux";
import Modal from "@mui/material/Modal";
import { Close } from "@mui/icons-material";

const ModalStyle = {
  position: "absolute",
  top: "2%",
  width: 1000,
  bgcolor: "white",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  gap: 5,
  // alignItems:'center',
  // justifyContent:'center',
  // overflowY:"scroll"
};

const Footer = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/spraxasolutions",
    },
    {
      name: "twitter",
      icon: twitter,
      link: "https://twitter.com/SpraxaSolutions",
    },
    {
      name: "linkedIn",
      icon: linkedIn,
      link: "https://www.linkedin.com/company/spraxa-solutions-pvt-ltd",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Typography>Copyright © Spraxa Solutions Pvt. Ltd.</Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        {socialIcons.map((icon) => (
          <a key={icon.name} href={icon.link} target="_blank" rel="noreferrer">
            <img src={icon.icon} alt={icon.name + " logo"} width={50}></img>
          </a>
        ))}
      </Box>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Link to="privacy">Privacy Policy</Link>
        <Link to="terms">Terms of Service</Link>
      </Box>
    </Box>
  );
};

const textfield = {
  backgroundColor: "white",
  borderRadius: "5px",
};

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const handleOpen = (title) => {
    Services.map((service) => {
      if (service.name === title) {
        setData(service.items);
        setOpen(true);
      }
    });
  };

  const handleClose = () => setOpen(false);
  const Preview = [
    { image: "logo_mockup.jpg", title: "logo", name: "Logos" },
    { image: "marketmat.jpg", title: "marketing", name: "Marketing Material" },
    {
      image: "coolr_brochure.jpg",
      title: "printing",
      name: "Printing Material",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f8f9fa",
        gap: 5,
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          height: "fit-content",
          pt: 10,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>
              PORTFOLIO
            </Typography>
            <Typography
              style={{ fontStyle: "italic", fontSize: "22px", fontWeight: 50 }}
            >
              Let's Walk Towards our designs
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 5,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {Preview.map((item, index) => {
              return (
                <Card key={index} sx={{ height: 350, display: "flex" }}>
                  <CardContent
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Box className="image-container">
                      <img
                        src={`/images/otherportfolio/${item.image}`}
                        width={350}
                      />
                      <Box
                        className="overlay"
                        onClick={() => {
                          setSelected(item.title);
                          handleOpen(item.title);
                        }}
                      >
                        <AddCircleIcon
                          style={{ color: "white", fontSize: 100 }}
                        />
                      </Box>
                    </Box>
                    <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontStyle: "italic" }}>
                      Illustration
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                mt: 5,
                overflow: "scroll",
              }}
            >
              <Box sx={ModalStyle}>
                {data.map((value, index) => {
                  return (
                    <Card>
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 5,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: " column",
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: 700,
                          }}
                        >
                          <Typography
                            style={{ fontSize: "48px", fontWeight: 700 }}
                          >
                            {value.title ? value.title : ""}
                          </Typography>

                          <Typography sx={{ fontStyle: "italic" }}>
                            {value.subtitle2 ? value.subtitle2 : ""}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 5,
                          }}
                        >
                          {Array.isArray(value.image) ? (
                            value.image.map((image, index) => {
                              return (
                                <img
                                  src={`images/portfolio/${selected}/${image}`}
                                  width={700}
                                ></img>
                              );
                            })
                          ) : (
                            <img
                              src={`images/portfolio/${selected}/${value.image}`}
                              width={700}
                            ></img>
                          )}
                        </Box>
                        <Box
                          sx={{
                            maxWidth: 700,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 2,
                          }}
                        >
                          {value.description.map((desc, index) => {
                            return (
                              <Typography variant="bodytext">{desc}</Typography>
                            );
                          })}
                        </Box>
                        <Box>
                          <Typography variant="bodytext">
                            Date: {value.Date}
                          </Typography>
                          <Typography variant="bodytext">
                            Client: {value.Client}
                          </Typography>
                          <Typography variant="bodytext">
                            Category: {value.Category}
                          </Typography>
                        </Box>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "#fed136",
                            color: "white",
                            width: 180,
                            height: 50,
                            fontSize: 16,
                            fontWeight: "bold",
                          }}
                          onClick={handleClose}
                        >
                          <Close />
                          Close Project
                        </Button>
                      </CardActions>
                    </Card>
                  );
                })}
              </Box>
            </Modal>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: `url(/images/darkbg.jpg)`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            gap: 5,
            py: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography style={{ fontSize: "40px", fontWeight: "bold" }}>
              CONTACT US
            </Typography>
            <Typography
              style={{ fontStyle: "italic", fontSize: "22px", fontWeight: 50 }}
            >
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
          </Box>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 40,
            }}
          >
            <Box sx={{ display: "flex", gap: 4 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  width: 500,
                }}
              >
                <TextField
                  sx={textfield}
                  required
                  placeholder="Your Name"
                  variant="outlined"
                />
                <TextField
                  sx={textfield}
                  required
                  placeholder="Your Email"
                  variant="outlined"
                />
                <TextField
                  sx={textfield}
                  required
                  placeholder="Your Phone"
                  variant="outlined"
                />
              </Box>
              <TextField
                sx={{ ...textfield, width: 500 }}
                required
                placeholder="Your Message"
                variant="outlined"
                multiline
                rows={9}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              style={{
                backgroundColor: "#fed136",
                color: "white",
                width: 200,
                height: 50,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Portfolio;
