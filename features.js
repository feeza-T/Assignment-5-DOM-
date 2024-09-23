function showSectionById(id) {
    
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
  }
  
  document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('history-page');
  });
  
  document.getElementById('btn-donation').addEventListener('click', function () {
    showSectionById('donation-page');
  });
  