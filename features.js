function showSectionById(id) {
    
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('history-page').classList.add('hidden');

    //button colour change
    if (id === 'donation-page') {
        document.getElementById('btn-donation').classList.add('bg-btn-bg');
        document.getElementById('btn-history').classList.remove('bg-btn-bg');
      } else if (id === 'history-page') {
        document.getElementById('btn-history').classList.add('bg-btn-bg');
        document.getElementById('btn-donation').classList.remove('bg-btn-bg');
      }

    document.getElementById(id).classList.remove('hidden');
  }
  
  document.getElementById('btn-history').addEventListener('click', function () {
    showSectionById('history-page');
  });
  
  document.getElementById('btn-donation').addEventListener('click', function () {
    showSectionById('donation-page');
  });
  