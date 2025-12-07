fetch("data.json")
  .then(response => response.json())
  .then(data => {
   
    document.getElementById("cv-name").textContent =
      `${data.nimi} ${data.perekonnanimi}`;

   
    document.getElementById("cv-description").textContent =
      data.kirjeldus;

   
    document.getElementById("cv-age").textContent =
      `Vanus: ${data.vanus}`;

   
    document.getElementById("cv-email").textContent =
      `E-post: ${data.email}`;

    
    const skillsList = document.getElementById("cv-skills");
    data.oskused.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    
    const langList = document.getElementById("cv-languages");
    data.keeled.forEach(lang => {
      const li = document.createElement("li");
      li.textContent = lang;
      langList.appendChild(li);
    });
  })
  .catch(error => console.error("JSON laadimise viga:", error));
