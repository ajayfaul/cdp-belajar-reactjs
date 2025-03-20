function Article() {
  const name = "John Doe";
  const titles = [
    "Belajar React itu menyenangkan",
    "Tutorial React dari Nol hingga Mahir",
    "React is Awesome",
  ];

  //   title.map(item => item);

  return (
    // memanfaatkan react fragment untuk membungkus beberapa element
    <>
      <div>
        Ini adalah component pertama
        <h1>Article</h1>
        // kalau satu element bisa seperti Ini
        {/* <h2>
          {titles.map((title) => (
            <div>{title}</div>
          ))}
        </h2> */}
        // Contoh multiple 1
        <h2>
          {titles.map((title) => {
            return <div>{title}</div>;
          })}
        </h2>
        // Contoh multiple 3
        <h2>
          {titles.map((title) => {
            return (
              <>
                <div>{title}</div>
                <div>{title}</div>
                <div>{title}</div>
              </>
            );
          })}
        </h2>
        <p>Halo, nama saya adalah {name}</p>
        {/* <p>Halo, nama saya adalah {name}</p> */}
      </div>
    </>
    // membungkus beberapa element dengan div
    // <div>
    //   <div>
    //     Ini adalah component pertama
    //     <h1>Article</h1>
    //     <p>Halo, nama saya adalah {name}</p>
    //     <p>Halo, nama saya adalah {name}</p>
    //   </div>
    // </div>
  );
}

export default Article;
