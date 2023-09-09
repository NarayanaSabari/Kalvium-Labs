export function themeUpdate(themeID) {
  console.log("Seleted");
  const newStyleElement = document.createElement("style");
  console.log(themeID);
  newStyleElement.textContent = Theam[`${themeID}`];
  newStyleElement.id = "customStyles";
  document.head.appendChild(newStyleElement);
}
let style;
// style = 1;
if (localStorage.getItem("themeID") == undefined) {
  style = 1;
  localStorage.setItem("themeID", style);
} else {
  //   localStorage.clearItem("themeID");
  style = parseInt(localStorage.getItem("themeID"));
}

export function themeSelector() {
  document
    .getElementsByClassName("right_arrow")[0]
    .addEventListener("click", () => {
      console.log("right");
      if (style == 2) {
        style = 0;
      } else {
        style += 1;
      }
      localStorage.setItem("themeID", style);
      themeUpdate(style);
    });

  document
    .getElementsByClassName("left_arrow")[0]
    .addEventListener("click", () => {
      console.log("left");
      if (style == 0) {
        style = 2;
      } else {
        style -= 1;
      }
      localStorage.setItem("themeID", style);
      themeUpdate(style);
    });
  return style;
}

const Theam = [
  `/* Font Definitions */
  @font-face {
      font-family: "ShadowHand";
      src: url("//2ttf.com/webfont/UIswCwhB/webfont.ttf") format("truetype");
    }
    
    /* Import Google Font */
    @import url("https://fonts.googleapis.com/css2?family=Yatra+One&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap");
    
    /* Reset Margin and Padding */
    * {
      margin: 0;
      padding: 0;
    }
    #theam_box > h2 {
        color : white;
      }
    /* Body Styling */
    body {
      background-color: black;
    }
    /* Color Coding */
    .text_bgcolor {
      background-color: white;
    }
    .text_color {
      color: black;
    }
    /* box color */
    .box_color {
      background-color: white;
    }
    
    /* text color for the body bg color */
    .text_color_samebg {
      color: white;
    }
    .border_color {
      border: 5px solid;
      border-color: white;
      border-radius: 30px;
    }
    /* Placeholder color */
    ::-webkit-input-placeholder {
      color: gray;
      text-align: center;
    }
    /* Flex Utility Classes */
    .flex {
      display: flex;
    }
    
    .flex-center {
      justify-content: center;
    }
    /* Text align Classes */
    .text-cen {
      text-align: center;
    }
    /* Title Styling */
    #title {
      font-family: "ShadowHand";
      color: white;
      font-size: 130px;
      text-align: center;
      padding-top: 140px;
    }
    
    /* Slider Styling */
    .slider {
      padding: 60px 10px;
      background-color: white;
      position: absolute;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(10, 10, 10, 10);
    }
    
    /* Left Slider Styling */
    #slider1 {
      bottom: 150px;
      left: 50px;
    }
    
    /* Right Slider Styling */
    #slider2 {
      top: 150px;
      right: 50px;
    }
    
    /* Start Button Styling */
    #button {
      display: flex;
      justify-content: center;
    }
    
    #start_btn,
    #restart_btn {
      color: black;
      background-color: white;
      font-size: 40px;
      padding: 20px;
      border-radius: 40px;
      font-family: "Yatra One", cursive;
    }
    #restart_btn {
      margin: 70px 0 70px;
    }
    /* For Tablet */
    @media screen and (max-width: 768px) {
      /* Title Styling */
      #title {
        font-size: 70px;
        padding-top: 140px;
      }
      /* Slider Styling */
      .slider {
        padding: 10px 60px;
      }
    
      /* Left Slider Styling */
      #slider1 {
        left: 150px;
        bottom: 50px;
      }
    
      /* Right Slider Styling */
      #slider2 {
        top: 50px;
        right: 150px;
      }
      /* Start Button Styling */
      #start_btn,
      #restart_btn {
        font-size: 30px;
        padding: 15px;
      }
    }
    
    /* For Mobile */
    `,
  `
    /* Font Definitions */
  @font-face {
      font-family: "ShadowHand";
      src: url("//2ttf.com/webfont/UIswCwhB/webfont.ttf") format("truetype");
    }
    
    /* Import Google Font */
    @import url("https://fonts.googleapis.com/css2?family=Yatra+One&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap");
    
    /* Reset Margin and Padding */
    * {
      margin: 0;
      padding: 0;
    }
    #theam_box > h2 {
        color : white;
      }
    /* Body Styling */
    body {
      background-color: #1e1e1e; /* Dark background color */
      color: #fff; /* White text color */
      font-family: "Rubik Wet Paint", sans-serif;
    }
    
    /* Color Coding */
    .text_bgcolor {
      background-color: #fff;
      color: #000; /* Black text color */
    }
    
    /* box color */
    .box_color {
      background-color: #fff;
    }
    
    /* text color for the body bg color */
    .text_color_samebg {
      color: #fff;
    }
    
    .border_color {
      border: 5px solid;
      border-color: #fff;
      border-radius: 30px;
    }
    
    /* Placeholder color */
    ::-webkit-input-placeholder {
      color: #777; /* Gray placeholder text color */
      text-align: center;
    }
    
    /* Flex Utility Classes */
    .flex {
      display: flex;
    }
    
    .flex-center {
      justify-content: center;
    }
    
    /* Text align Classes */
    .text-cen {
      text-align: center;
    }
    
    /* Title Styling */
    #title {
      font-family: "ShadowHand";
      color: #006fff; /* Primary blue text color */
      font-size: 130px;
      text-align: center;
      padding-top: 140px;
    }
    
    /* Slider Styling */
    .slider {
      padding: 60px 10px;
      background-color: #0085ff; /* Light blue background color */
      position: absolute;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.5); /* Subtle box shadow */
    }
    
    /* Left Slider Styling */
    #slider1 {
      bottom: 150px;
      left: 50px;
    }
    
    /* Right Slider Styling */
    #slider2 {
      top: 150px;
      right: 50px;
    }
    
    /* Start Button Styling */
    #button {
      display: flex;
      justify-content: center;
    }
    
    #start_btn,
    #restart_btn {
      color: #fff;
      background-color: #69b4ff; /* Lighter blue background color */
      font-size: 40px;
      padding: 20px;
      border-radius: 40px;
      font-family: "Yatra One", cursive;
    }
    
    #restart_btn {
      margin: 70px 0 70px;
    }
    
    /* For Tablet */
    @media screen and (max-width: 768px) {
      /* Title Styling */
      #title {
        font-size: 70px;
        padding-top: 140px;
      }
      /* Slider Styling */
      .slider {
        padding: 10px 60px;
      }
    
      /* Left Slider Styling */
      #slider1 {
        left: 150px;
        bottom: 50px;
      }
    
      /* Right Slider Styling */
      #slider2 {
        top: 50px;
        right: 150px;
      }
      /* Start Button Styling */
      #start_btn,
      #restart_btn {
        font-size: 30px;
        padding: 15px;
      }
    }
  `,
  `/* Font Definitions */
  @font-face {
    font-family: "ShadowHand";
    src: url("//2ttf.com/webfont/UIswCwhB/webfont.ttf") format("truetype");
  }
  
  /* Import Google Font */
  @import url("https://fonts.googleapis.com/css2?family=Yatra+One&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
  
  /* Reset Margin and Padding */
  * {
    margin: 0;
    padding: 0;
  }
  #theam_box > h2 {
    color : black;
  }
  /* Body Styling */
  body {
    background-color: #f4f4f4; /* ;Light gray background color */
    font-family: "Rubik", sans-serif; /* Use the Rubik font */
  }
  
  /* Color Coding */
  .text_bgcolor {
    background-color: #ffffff; /* White background for text */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
  }
  
  .text_color {
    color: #333333; /* Dark gray text color */
  }
  
  .box_color {
    background-color: #ffffff; /* White background for boxes */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Subtle box shadow */
  }
  
  /* Text color for the body bg color */
  .text_color_samebg {
    color: #333333; /* Dark gray text color for light backgrounds */
  }
  
  .border_color {
    border: 5px solid;
    border-color: #333333; /* Dark gray border color */
    border-radius: 30px;
  }
  
  /* Placeholder color */
  ::-webkit-input-placeholder {
    color: #999999; /* Light gray placeholder text color */
    text-align: center;
  }
  
  /* Flex Utility Classes */
  .flex {
    display: flex;
  }
  
  .flex-center {
    justify-content: center;
  }
  
  /* Text align Classes */
  .text-cen {
    text-align: center;
  }
  
  /* Title Styling */
  #title {
    font-family: "ShadowHand";
    color: #4caf50; /* Attractive green title color */
    font-size: 130px;
    text-align: center;
    padding-top: 140px;
  }
  
  /* Slider Styling */
  .slider {
    padding: 60px 10px;
    background-color: #ffffff; /* White background for sliders */
    position: absolute;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(10, 10, 10, 10);
  }
  
  /* Left Slider Styling */
  #slider1 {
    bottom: 150px;
    left: 50px;
  }
  
  /* Right Slider Styling */
  #slider2 {
    top: 150px;
    right: 50px;
  }
  
  /* Start Button Styling */
  #button {
    display: flex;
    justify-content: center;
  }
  
  #start_btn,
  #restart_btn {
    color: #ffffff; /* White text color */
    background-color: #4caf50; /* Attractive green background color */
    font-size: 40px;
    padding: 20px 40px; /* Increased padding for buttons */
    border-radius: 40px;
    font-family: "Yatra One", cursive;
    cursor: pointer; /* Add cursor pointer on hover */
    transition: background-color 0.2s ease; /* Smooth background color transition */
  }
  
  #start_btn:hover,
  #restart_btn:hover {
    background-color: #45a049; /* Darker green on hover */
  }
  
  #restart_btn {
    margin: 70px 0 70px;
  }
  
  /* For Tablet */
  @media screen and (max-width: 768px) {
    /* Title Styling */
    #title {
      font-size: 70px;
      padding-top: 140px;
    }
  
    /* Slider Styling */
    .slider {
      padding: 10px 60px;
    }
  
    /* Left Slider Styling */
    #slider1 {
      left: 150px;
      bottom: 50px;
    }
  
    /* Right Slider Styling */
    #slider2 {
      top: 50px;
      right: 150px;
    }
  
    /* Start Button Styling */
    #start_btn,
    #restart_btn {
      font-size: 30px;
      padding: 15px 30px; /* Adjusted padding for smaller screens */
    }
  }
  
  /* For Mobile */
  `,
];
