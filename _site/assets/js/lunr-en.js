var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Welcome to Minimal Mistakes Jekyll",
      excerpt: "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
      categories: ["/posts/update"],
      tags: ["jekyll"],
      id: 0
    });
    
  
    idx.add({
      title: "Math Support",
      excerpt: "You can enable math support through use_math: true front matter which enable the MathJax.js rendering. After enable math support, use...",
      categories: ["/posts/MathJax/"],
      tags: ["MathJax"],
      id: 1
    });
    
  
    idx.add({
      title: "Introduction of Linux",
      excerpt: "What is Linux? Just like Windows XP, Windows 7, Windows 8, and Mac OS X, Linux is an operating system....",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 2
    });
    
  
    idx.add({
      title: "Basic Linux Commands",
      excerpt: "In ubuntu system, we can open the terminal to do some command operations, and then manage the files through commands....",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 3
    });
    
  
    idx.add({
      title: "Intermediate Linux Commands",
      excerpt: "After understanding some basic linux commands, we will continue to introduce other intermediate linux commands. 1. cat Use the this...",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 4
    });
    
  
    idx.add({
      title: "Tips for Linux Commands",
      excerpt: "Here are five tips that can help you operate Linux system more easily and conveniently. You can use the clear...",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 5
    });
    
  
    idx.add({
      title: "Introduction of LaTeX",
      excerpt: "What is LaTeX? LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the...",
      categories: ["/posts/latex/"],
      tags: ["LaTeX"],
      id: 6
    });
    
  
    idx.add({
      title: "Basic LaTeX Symbols",
      excerpt: "Greek Letters Output Code Output Code Output Code Output Code \\alpha \\theta o \\tau \\beta \\vartheta \\pi \\upsilon \\gamma \\xi...",
      categories: ["/posts/latex/"],
      tags: ["LaTeX"],
      id: 7
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Welcome to Minimal Mistakes Jekyll",
        "url": "http://localhost:4000/posts/update/welcome-to-minimal-mistakes-jekyll/",
        "excerpt": "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Math Support",
        "url": "http://localhost:4000/posts/mathjax/math-support/",
        "excerpt": "You can enable math support through use_math: true front matter which enable the MathJax.js rendering. After enable math support, use...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Introduction of Linux",
        "url": "http://localhost:4000/posts/linux/introduction-of-linux/",
        "excerpt": "What is Linux? Just like Windows XP, Windows 7, Windows 8, and Mac OS X, Linux is an operating system....",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Basic Linux Commands",
        "url": "http://localhost:4000/posts/linux/basic-linux-commands/",
        "excerpt": "In ubuntu system, we can open the terminal to do some command operations, and then manage the files through commands....",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Intermediate Linux Commands",
        "url": "http://localhost:4000/posts/linux/intermediate-linux-commands/",
        "excerpt": "After understanding some basic linux commands, we will continue to introduce other intermediate linux commands. 1. cat Use the this...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Tips for Linux Commands",
        "url": "http://localhost:4000/posts/linux/tips-for-linux-commands/",
        "excerpt": "Here are five tips that can help you operate Linux system more easily and conveniently. You can use the clear...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Introduction of LaTeX",
        "url": "http://localhost:4000/posts/latex/introduction-of-latex/",
        "excerpt": "What is LaTeX? LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Basic LaTeX Symbols",
        "url": "http://localhost:4000/posts/latex/basic-latex-symbols/",
        "excerpt": "Greek Letters Output Code Output Code Output Code Output Code \\alpha \\theta o \\tau \\beta \\vartheta \\pi \\upsilon \\gamma \\xi...",
        "teaser":
          
            "http://localhost:4000/"
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
