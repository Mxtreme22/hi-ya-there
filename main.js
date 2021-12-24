Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    pngquality:90
    });
  
  camera = document.getElementById("camera");
  
  Webcam.attach( '#camera');
  
  function take_snapshot()
  {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  
    });
  }
  
  console.log('ml5 version:', ml5.version);
  classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ptPeCfYDG/model.json',modelLoaded);
  
  function modelLoaded(){
    console.log('Model Loaded!');
  }
  

  function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
  }

  function speak(){
    var synth = window.speechSynthesis;

    speak_data_1= "Yes you can";
    speak_data_2= "No you can't";
    speak_data_3= "thats cool";
    speak_data_4= "lets call it a truce";
    speak_data_5= "Hi there how are you";
  
  
  }
  

function gotResult(error,results) 
  { 
        if (error) {
            console.error(error);
          } 
      else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
            document.getElementById("result_emotion_name2").innerHTML = results[1].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            speak();
            if(results[0].label == "thumbs up")
            {
              var utterThis = new SpeechSynthesisUtterance(speak_data_1);
              synth.speak(utterThis);
                document.getElementById("update_emoji").innerHTML = "&#128077;";

            }
            if(results[0].label == "thumbs down")
            {
              var utterThis = new SpeechSynthesisUtterance(speak_data_2);
              synth.speak(utterThis);
                document.getElementById("update_emoji").innerHTML = "&#128078;";
            }
            if(results[0].label == "rad")
            {
              var utterThis = new SpeechSynthesisUtterance(speak_data_3);
              synth.speak(utterThis);
                document.getElementById("update_emoji").innerHTML = "&#129304;";
            }
            if(results[1].label == "peace")
              {
                var utterThis = new SpeechSynthesisUtterance(speak_data_4);
                synth.speak(utterThis);
                document.getElementById("update_emoji2").innerHTML = "&#9996;";
              }
            if(results[1].label == "wave")
              { var utterThis = new SpeechSynthesisUtterance(speak_data_5);
                synth.speak(utterThis);
                document.getElementById("update_emoji2").innerHTML = "&#128075;";
              }
          }
  }

