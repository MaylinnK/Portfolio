let github = document.querySelector(
  "ul li:nth-last-of-type(1) a:nth-of-type(1) img"
).src;
console.log(github);

let linkedin = document.querySelector(
  "ul li:nth-last-of-type(1) a:nth-of-type(2) img"
).src;
console.log(linkedin);

let mail = document.querySelector(
  "ul li:nth-last-of-type(1) a:nth-of-type(3) img"
).src;
console.log(mail);

let githubStatus = false;
let linkedinStatus = false;
let mailStatus = false;

function githubOn() {
  if (githubStatus == false) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(1) img"
    ).src = "./images/githubopen.svg";
    githubStatus = true;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(1) img")
  .addEventListener("mouseover", githubOn);

function githubOff() {
  if (githubStatus == true) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(1) img"
    ).src = "./images/github.svg";
    githubStatus = false;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(1) img")
  .addEventListener("mouseout", githubOff);

function linkedinOn() {
  if (linkedinStatus == false) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(2) img"
    ).src = "./images/liopen.svg";
    linkedinStatus = true;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(2) img")
  .addEventListener("mouseover", linkedinOn);

function linkedinOff() {
  if (linkedinStatus == true) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(2) img"
    ).src = "./images/li.svg";
    linkedinStatus = false;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(2) img")
  .addEventListener("mouseout", linkedinOff);

function mailOn() {
  if (mailStatus == false) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(3) img"
    ).src = "./images/mailopen.svg";
    mailStatus = true;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(3) img")
  .addEventListener("mouseover", mailOn);

function mailOff() {
  if (mailStatus == true) {
    document.querySelector(
      "ul li:nth-last-of-type(1) a:nth-of-type(3) img"
    ).src = "./images/mail.svg";
    mailStatus = false;
  }
}

document
  .querySelector("ul li:nth-last-of-type(1) a:nth-of-type(3) img")
  .addEventListener("mouseout", mailOff);

// ---------------------------------ThreeJS------------------------------------

const dataRaw = [
  { value: 20, label: "CSS" },
  { value: 23, label: "HTML" },
  { value: 13, label: "Adobe Photoshop"},
  { value: 18, label: "Adobe InDesign" },
  { value: 15, label: "Adobe Illustrator" },
  { value: 15, label: "JavaScript"},
];

let data = [dataRaw];

let RadarChart = {
  draw: function (id, d, options) {
    // Maakt een lijst van eigenschappen aan voor de chart om later gemakkelijk aanpassingen te maken.
    let cfg = {
      radius: 6,
      w: 300,
      h: 300,
      factor: 1,
      factorLegend: 0.85,
      levels: 5,
      maxValue: 30,
      radians: 2 * Math.PI,
      opacityArea: 0.3,
      ToRight: 5,
      TranslateX: 80,
      TranslateY: 100,
      ExtraWidthX: 165,
      ExtraWidthY: 200,
      color: d3.scaleOrdinal().range(["#31a8ff"]),
    };

    // Wat variabelen voor de aankomende functies.
    allAxis = ["css", "html", "ps", "id", "ai", "js"];
    let total = allAxis.length;
    let radius = cfg.factor * Math.min(cfg.w / 2, cfg.h / 2);
    d3.select(id).select("svg").remove();

    let g = d3
      .select(id)
      .append("svg")
      .attr("width", cfg.w + cfg.ExtraWidthX)
      .attr("height", cfg.h + cfg.ExtraWidthY)
      .append("g")
      .attr(
        "transform",
        "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")"
      );
      g
      .append("polygon")
      .attr("class", "background")
      .attr("points", "150,0,150,0 20.09618943233421,74.99999999999999,20.09618943233421,74.99999999999999 20.096189432334192,224.99999999999997,20.096189432334192,224.99999999999997 149.99999999999997,300,149.99999999999997,300 279.90381056766574,225.00000000000006,279.90381056766574,225.00000000000006 279.9038105676658,74.99999999999999,279.9038105676658,74.99999999999999 ")

    // Maakt de vijfhoeken aan en positioneert ze in elkaar.
    for (let j = 0; j < cfg.levels; j++) {
      let levelFactor = cfg.factor * radius * ((j + 1) / cfg.levels);
      g.selectAll(".levels")
        .data(allAxis)
        .enter()
        .append("svg:line")
        // maakt 1 voor 1 de lijnen van de zeshoeken aan.
        .attr("x1", function (d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
          );
        })
        .attr("y1", function (d, i) {
          return (
            levelFactor * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
          );
        })
        .attr("x2", function (d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.sin(((i + 1) * cfg.radians) / total))
          );
        })
        .attr("y2", function (d, i) {
          return (
            levelFactor *
            (1 - cfg.factor * Math.cos(((i + 1) * cfg.radians) / total))
          );
        })
        .attr("class", "line")
        .style("stroke", "#808080")
        .style("stroke-opacity", "0.7")
        .style("stroke-width", "1.5px")
        .attr(
          "transform",
          "translate(" +
            (cfg.w / 2 - levelFactor) +
            ", " +
            (cfg.h / 2 - levelFactor) +
            ")"
        );
        
    }
    series = 0;



    // Maakt groepen aan voor de axis lijnen
    let axis = g
      .selectAll(".axis")
      .data(allAxis)
      .enter()
      .append("g")
      .attr("class", "axis");


      // .attr("points", function (d) {
      //   let str = "";
      //   for (let pti = 0; pti < d.length; pti++) {
      //     str = str + d[pti] + "," + d[pti] + " ";
      //   }
      //   return str;
      // })


    //Maakt de axis lijnen aan.
    axis
      .append("line")
      .attr("x1", cfg.w / 2)
      .attr("y1", cfg.h / 2)
      .attr("x2", function (d, i) {
        return (
          (cfg.w / 2) * (1 - cfg.factor * Math.sin((i * cfg.radians) / total))
        );
      })
      .attr("y2", function (d, i) {
        return (
          (cfg.h / 2) * (1 - cfg.factor * Math.cos((i * cfg.radians) / total))
        );
      })
      .attr("class", "line")
      .style("stroke", "#808080")
      .style("stroke-width", "2px");

    // Voegt de labels toe aan de chart.
    axis
      .append("image")
      .attr("class", "legend")
      .attr("href", (function (d) {
        console.log(d)
        return "./images/" + d + ".svg";
      }))
      .style("width", "35px")
      .attr("dy", "1.5em")
      .attr("transform", function (d, i) {
        return "translate(0, -10)";
      })
      // Positioneert de labels op de hoeken.
      .attr("x", function (d, i) {
        return (
          (cfg.w / 2) *
            (0.84 - cfg.factorLegend * Math.sin((i * cfg.radians) / total)) -
          65 * Math.sin((i * cfg.radians) / total)
        );
      })
      .attr("y", function (d, i) {
        return (
          (cfg.h / 2) * (0.75 - Math.cos((i * cfg.radians) / total)) -
          35 * Math.cos((i * cfg.radians) / total)
        );
      });

    // Laadt alle data in de chart.
    function loadData(berry, tooltip) {
      // Delete huidige data in de chart.
      d3.selectAll(".poly").remove();
      let dataValues = [];
      console.log(data);
      // Haalt de id op van de geselecteerde radiobutton.
      // Loopt door de potencies heen en zet deze om naar coordinaten op de chart.
      data.forEach(function (y, x) {
        g.selectAll(".nodes").data(y, (j, i) => {
          dataValues.push([
            (cfg.w / 2) *
              (1 -
                (parseFloat(Math.max(j.value + 5, 0)) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total)),
            (cfg.h / 2) *
              (1 -
                (parseFloat(Math.max(j.value + 5, 0)) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total)),
          ]);
        });
      });

      // Gebruikt de coordinaten om de radar op de chart te zetten.
      g.selectAll(".area")
        .data([dataValues])
        .join(function (enter) {
          return (
            enter
              .append("polygon")
              .attr("class", "radar-chart-serie" + series + " poly")
              .style("stroke-width", "1.5px")
              .style("stroke", cfg.color(series))
              .attr("points", function (d) {
                let str = "";
                for (let pti = 0; pti < d.length; pti++) {
                  str = str + d[pti] + "," + d[pti] + " ";
                }
                return str;
              })
              .style("fill", function (_, _) {
                return cfg.color(series);
              })
              .style("fill-opacity", cfg.opacityArea)

              // Animatie als je over de radar hovert.
              .on("mouseover", function (d) {
                z = "polygon." + d3.select(this).attr("class");
                g.selectAll("polygon")
                  .transition(200)
                  .style("fill-opacity", 0.5);
                g.selectAll(z).transition(200).style("fill-opacity", 0.7);
              })
              .on("mouseout", function () {
                g.selectAll("polygon")
                  .transition(200)
                  .style("fill-opacity", cfg.opacityArea);
              })
          );
        });

      series = 0;

      // Maakt cirkels aan per hoek om de potency te kunnen zien.
      tooltip = d3.select("body").append("div").attr("class", "toolTip");
      // Haalt weer de potency data op en en zet deze om naar coordinaten.
      data.forEach(function (y, x) {
        g.selectAll(".nodes")
          .data(y)
          .enter()
          .append("svg:circle")
          .attr("class", "radar-chart-serie" + series + " poly")
          .attr("r", cfg.radius)
          .attr("alt", function (j) {
            return Math.max(j.value, 0);
          })
          .attr("cx", function (j, i) {
            dataValues.push([
              (cfg.w / 2) *
                (1 -
                  (parseFloat(Math.max(j.value + 5, 0)) / cfg.maxValue) *
                    cfg.factor *
                    Math.sin((i * cfg.radians) / total)),
              (cfg.h / 2) *
                (1 -
                  (parseFloat(Math.max(j.value + 5, 0)) / cfg.maxValue) *
                    cfg.factor *
                    Math.cos((i * cfg.radians) / total)),
            ]);
            return (
              (cfg.w / 2) *
              (1 -
                (Math.max(j.value + 5, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.sin((i * cfg.radians) / total))
            );
          })
          .attr("cy", function (j, i) {
            return (
              (cfg.h / 2) *
              (1 -
                (Math.max(j.value + 5, 0) / cfg.maxValue) *
                  cfg.factor *
                  Math.cos((i * cfg.radians) / total))
            );
          })
          .style("fill", "#fff")
          .style("stroke-width", "1px")
          .style("stroke", cfg.color(series))
          .style("fill-opacity", 0)

          // Hover reactie om de tooltip te kunnen zien.
          .on("mouseover", function (event, j) {
            tooltip
              .style("left", event.pageX - 40 + "px")
              .style("top", event.pageY - 80 + "px")
              .style("display", "inline-block")
              .html(j.label);
            g.style("fill-opacity", 1);
          })
          .on("mouseout", function (d) {
            tooltip.style("display", "none");
          });
        series++;
      });
    }
    loadData();
  },
};

RadarChart.draw("#chart", data);
