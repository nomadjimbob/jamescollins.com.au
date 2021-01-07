// "use strict";

document.querySelectorAll('a').forEach(function(elem) {
    elem.addEventListener('click', function(event) {
        var expandKey = this.dataset.expand;
        
        if(typeof(expandKey) !== 'undefined') {
            event.preventDefault();
            var container = document.querySelector('#' + expandKey + ' .expand');
            if (container.classList.contains('active')) {
                container.style.height = '0px';
                container.classList.remove('active');
            } else {
                container.classList.add('active');
                container.style.height = 'auto';
                
                var height = container.clientHeight + 'px';
                
                container.style.height = '0px';
                
                setTimeout(function () {
                    container.style.height = height;
                }, 0);                
            }
        }
    });
});
