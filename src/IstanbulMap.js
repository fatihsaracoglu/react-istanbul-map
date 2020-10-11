import React from "react";
import { Tooltip, OverlayTrigger, Card } from "react-bootstrap";
import { style } from "glamor";
import data from "./data";

const IstanbulMap = (props) => {
  const styles = {
    area: style({
      fill: props.mapColor || "#708090",
      ":hover": {
        fill: props.hoverColor || "#F9D342",
        stroke: props.hoverColor || "#F9D342",
      },
    }),
  };

  return (
    <div className="map-container">
      <svg
        width={props.mapWidth || "1000px"}
        height={props.mapHeight || "700px"}
        viewBox={props.viewBox || "70 25 80 60"}
      >
        {data.map((item, idx) => {
          if (
            props.isHoverable === undefined ||
            props.isHoverable === "true"
          ) {
            return (
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  props.data ? (
                    <Card
                      bg="dark"
                      key={idx}
                      text="light"
                      style={{ fontSize: "0.9rem", width: "15rem" }}
                      className="mb-2"
                    >
                      <Card.Header>{item.name}</Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {props.data
                            .filter((data) => {
                              return data.name === item.name;
                            })
                            .map((obj) => {
                              return obj.content;
                            })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ) : (
                    <Tooltip id="tooltip">{item.name}</Tooltip>
                  )
                }
                key={idx}
              >
                <path
                  {...styles.area}
                  d={item.d}
                  stroke="#000000"
                  strokeWidth="0.04333332008785727"
                />
              </OverlayTrigger>
            );
          } else {
            return (
              <path
                {...styles.area}
                d={item.d}
                stroke="#000000"
                strokeWidth="0.04333332008785727"
              />
            );
          }
        })}
      </svg>
    </div>
  );
};

export default IstanbulMap;
