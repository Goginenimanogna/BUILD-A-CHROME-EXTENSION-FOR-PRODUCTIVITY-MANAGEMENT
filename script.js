document.addEventListener("DOMContentLoaded", function () {
    const blockList = document.getElementById("blockList");
    const addSiteBtn = document.getElementById("addSite");
    const siteInput = document.getElementById("siteInput");
  
    let blockedSites = JSON.parse(localStorage.getItem("blockedSites")) || [];
  
    function updateList() {
      blockList.innerHTML = "";
      blockedSites.forEach(site => {
        const li = document.createElement("li");
        li.textContent = site;
        blockList.appendChild(li);
      });
    }
  
    addSiteBtn.addEventListener("click", () => {
      const newSite = siteInput.value.trim();
      if (newSite && !blockedSites.includes(newSite)) {
        blockedSites.push(newSite);
        localStorage.setItem("blockedSites", JSON.stringify(blockedSites));
        siteInput.value = "";
        updateList();
      }
    });
  
    updateList();
  });
  