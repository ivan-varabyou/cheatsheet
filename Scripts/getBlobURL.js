const array = ["https://mp3tales.info/audio/bayu_bayushki_bayu.mp3"];

const getTodo = async (v) =>
  await fetch(v, { headers: { "Content-Type": "audio/mpeg" } });

const todos = Promise.all(array.map(getTodo))
  .then(([response]) => {
    const headers = response.headers;
    headers;
    const body = response.body;
    body;
    const bodyUsed = response.bodyUsed;
    bodyUsed;

    return response.blob();
  })
  .then((data) => {
    console.log(data);
    data;
    const url = URL.createObjectURL(data);
    console.log(url);
    url;
    const audio = new Audio(array[0]);
    audio.play();
    let ancor = document.createElement("a");
    ancor.href = url;
    ancor;
    ancor.download = "newTrack.mp3";
    document.body.appendChild(ancor);
    ancor.click();
    document.body.removeChild(ancor);

    URL.revokeObjectURL(url);
  })
  .catch((error) => console.log(error));
