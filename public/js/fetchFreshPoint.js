export const fetchFreshPoint = async () => {
    const freshPointInfo = {};
    const freshPointP = document.getElementById('freshPointInfo');
    const randomFrehsPointId = Math.floor(Math.random() * 100);
    try {
      const freshPoint = await fetch(
        `http://localhost:8070/freshpoint/${randomFrehsPointId}`,
        { method: 'GET', headers: { 'Content-Type': 'application/json' } }
      );
      const jsonFreshPoint = await freshPoint.json();
      if (jsonFreshPoint) {
        freshPointInfo.nom = `${String(jsonFreshPoint.data.nom)}.\nAdresse: ${jsonFreshPoint.data.adresse ?? 'non renseignée'}, ${jsonFreshPoint.data.arrondissement ?? ''} Paris`;
      } else {
        freshPointP.innerText = 'Aucun point de fraîcheur trouvé...';
      }
      if (freshPointP.innerText !== '') {
        freshPointP.innerText = '';
      }
      freshPointP.innerText = `Îlot de fraîcheur sélectionné : ${freshPointInfo.nom}.`;
    } catch (error) {
      console.error(error.message);
    }
  };
