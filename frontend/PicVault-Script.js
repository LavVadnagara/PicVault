document.addEventListener('DOMContentLoaded', (event) => {
  const showImageBtn = document.getElementById('ShowImageBTN');
  const showImageContainer = document.getElementById('ShowImageContainer');
  const closeShowBtn = document.querySelector('.CloseShowbtn');
  const MainCont = document.querySelector('.container');

  showImageBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (showImageContainer.style.visibility === 'hidden' || showImageContainer.style.visibility === '') {
      showImageContainer.style.visibility = 'visible';
      MainCont.style.visibility = 'hidden';
    } else {
      showImageContainer.style.visibility = 'hidden';
    }
  });

  closeShowBtn.addEventListener('click', () => {
    showImageContainer.style.visibility = 'hidden';
    MainCont.style.visibility = 'visible';
  });
});

async function SubmitImage() {
  const image = document.querySelector('#Uimage').value;

  if (!image) {
    alert('Please pick a image to upload.');
    return;
  }

  try {
    const ImageResponse = await fetch("http://localhost:5500/api/users/imgupload", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image }),
      mode: 'no-cors',
    });

    if (!ImageResponse.ok) throw new Error("Error if !ImageResponse.ok :\n", error.message);

    const ImgData = await ImageResponse.json();

    console.log('Image is successfully uploaded!\nResponse in JSON format:', ImgData);

    alert("Image was successfully uploaded!!");

  } catch (error) {
    console.error("There is error in uploading the image.\nError in catch:", error.message);
    alert("There is error in uploading the image");
  }
}

async function DisplayImage() {
  try {
    const displayImageRes = await fetch("http://localhost:5000/api/imgupload", {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    });

    if (!ImageResponse.ok) throw new Error("Error if !ImageResponse.ok :\n",error.message);

    const SIres = await displayImageRes.json();
    const data = SIres.data;

  } catch (error) {

  }
}

document.querySelector("#IDSubmitbtn").addEventListener("click", (event) => {
  console.log('Submit Image Button clicked');
  event.preventDefault();
  SubmitImage();
});