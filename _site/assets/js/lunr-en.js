var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Page Not Found",
      excerpt: "Sorry, but the page you were trying to view does not exist — perhaps you can try searching for it...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "About",
      excerpt: "Professional AI/ML specialist solutions architect with 4+ years of experience in Big Data and Analytics, including 3 years AI research...",
      categories: [],
      tags: [],
      id: 1
    });
    
  
    idx.add({
      title: "AWS IoT",
      excerpt: "AWS IoT AWS IoT 提供將 IoT 裝置連接至其他裝置和 AWS 雲端服務的雲端服務，並且可以協助使用者將 IoT 裝置整合至基於 AWS IoT 的解決方案中。因此如果使用中的裝置可以連線到 AWS IoT，則 AWS IoT 就可以將這些裝置連線到 AWS...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Cloud Platform Public Notes",
      excerpt: "AWS Learning Notes\n\n AWS Lambda\n\n AWS IoT\n",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Calculus",
      excerpt: "Introduction Calculus, originally called infinitesimal calculus or “the calculus of infinitesimals”, is the mathematical study of continuous change, in the...",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "ICM",
      excerpt: "Introduction Fundamentals of Numerical Computation is an advanced undergraduate-level introduction to the mathematics and use of algorithms for the fundamental...",
      categories: [],
      tags: [],
      id: 5
    });
    
  
    idx.add({
      title: "Courses",
      excerpt: "Required or Elective Subjects: National Taiwan University 1. Real Analysis 2. Graph Theory 3. Numerical Linear Algebra 4. High-Performance Numerical...",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "High-Performance Numerical Solver",
      excerpt: "Teacher Edmond Chow Associate Professor School of Computational Science and Engineering College of Computing Georgia Institute of Technology Topics Asynchornous...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Graph Theory",
      excerpt: "Introduction\n\n圖論的各種研究方法中，重要的有拓樸方法、機率方法、代數方法、演算法。有效的演算法能協助電腦達到快速計算，對實用端有很大的好處。從數學的觀點來看，演算法其實是數學歸納法的化身，所以它可以用來幫忙證明定理；反過來，一些定理的歸納法證明，也常能轉化成演算法。本書在各處盡可能地展現數學歸納法和演算法的一體兩面特性。\n\nText Book\n\n\n  演算法觀點的圖論\n   張鎮華\n   \n\n\n",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Real Analysis",
      excerpt: "Introduction Real analysis is the basis of advanced analysis theory, and is also an important tool commonly used in other...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Mini-course (10/17)",
      excerpt: "Date 17 October, 2019 (Thus.) Materials Slide Lecture, Radiomics features introduction Hands-on Download via GitHub, Online demo Agenda Course introduction...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Posts",
      excerpt: "2019 Basic LaTeX Symbols July 22, 2019 &emsp; &nbsp; 2 minute read Introduction of LaTeX July 21, 2019 &emsp; &nbsp;...",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Cortical Spreading Depression",
      excerpt: "Introduction Cortical spreading depression (CSD) is an electrical silent wave across all over the cerebral cortex and impairs some cortical...",
      categories: [],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Cortical Spreading Depression",
      excerpt: "\n",
      categories: [],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Brain Tumor Classification",
      excerpt: "Introduction\n\nGoal\n\nData\n\nResults\n\nConclusions\n\nFuture works\n\nReferencess\n\nAcknowledgements\n\nExtesion\n\n",
      categories: [],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "Hypopharyngeal Tumor Classification",
      excerpt: "Introduction\n\nGoal\n\nData\n\nResults\n\nConculsions\n\nFuture works\n\nReferences\n\nAcknowledgements\n\nExtension\n\n",
      categories: [],
      tags: [],
      id: 15
    });
    
  
    idx.add({
      title: "Radiomics",
      excerpt: "Introduction\n\nApplication\n\nTutorial\n\nExtesion\n\n",
      categories: [],
      tags: [],
      id: 16
    });
    
  
    idx.add({
      title: "Disorder (Mental)",
      excerpt: "Introduction Disorder is often called the hidden disability because our behavior and thinking may have very serious problems, and yet...",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Projects",
      excerpt: "National Taiwan University x National Taiwan University Hospital Brain Tumor Classification Hypopharyngeal Tumor Classification Radiomics National Taiwan University x IBM...",
      categories: [],
      tags: [],
      id: 18
    });
    
  

  
  
    idx.add({
      title: "Welcome to Minimal Mistakes Jekyll",
      excerpt: "Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of...",
      categories: ["/posts/update"],
      tags: ["jekyll"],
      id: 19
    });
    
  
    idx.add({
      title: "Math Support",
      excerpt: "You can enable math support through use_math: true front matter which enable the MathJax.js rendering. After enable math support, use...",
      categories: ["/posts/MathJax/"],
      tags: ["MathJax"],
      id: 20
    });
    
  
    idx.add({
      title: "Introduction of Linux",
      excerpt: "What is Linux? Just like Windows XP, Windows 7, Windows 8, and Mac OS X, Linux is an operating system....",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 21
    });
    
  
    idx.add({
      title: "Basic Linux Commands",
      excerpt: "In ubuntu system, we can open the terminal to do some command operations, and then manage the files through commands....",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 22
    });
    
  
    idx.add({
      title: "Intermediate Linux Commands",
      excerpt: "After understanding some basic linux commands, we will continue to introduce other intermediate linux commands. 1. cat Use the this...",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 23
    });
    
  
    idx.add({
      title: "Tips for Linux Commands",
      excerpt: "Here are five tips that can help you operate Linux system more easily and conveniently. You can use the clear...",
      categories: ["/posts/linux/"],
      tags: ["Linux"],
      id: 24
    });
    
  
    idx.add({
      title: "Introduction of LaTeX",
      excerpt: "What is LaTeX? LaTeX is a document preparation system. When writing, the writer uses plain text as opposed to the...",
      categories: ["/posts/latex/"],
      tags: ["LaTeX"],
      id: 25
    });
    
  
    idx.add({
      title: "Basic LaTeX Symbols",
      excerpt: "Greek Letters Output Code Output Code Output Code Output Code \\alpha \\theta o \\tau \\beta \\vartheta \\pi \\upsilon \\gamma \\xi...",
      categories: ["/posts/latex/"],
      tags: ["LaTeX"],
      id: 26
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Page Not Found",
        "url": "http://localhost:4000/404.html",
        "excerpt": "Sorry, but the page you were trying to view does not exist — perhaps you can try searching for it...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "About",
        "url": "http://localhost:4000/about/",
        "excerpt": "Professional AI/ML specialist solutions architect with 4+ years of experience in Big Data and Analytics, including 3 years AI research...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "AWS IoT",
        "url": "http://localhost:4000/cloud/aws/iot/iot.html",
        "excerpt": "AWS IoT AWS IoT 提供將 IoT 裝置連接至其他裝置和 AWS 雲端服務的雲端服務，並且可以協助使用者將 IoT 裝置整合至基於 AWS IoT 的解決方案中。因此如果使用中的裝置可以連線到 AWS IoT，則 AWS IoT 就可以將這些裝置連線到 AWS...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Cloud Platform Public Notes",
        "url": "http://localhost:4000/cloud/",
        "excerpt": "AWS Learning Notes\n\n AWS Lambda\n\n AWS IoT\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Calculus",
        "url": "http://localhost:4000/courses/TA/Calculus.html",
        "excerpt": "Introduction Calculus, originally called infinitesimal calculus or “the calculus of infinitesimals”, is the mathematical study of continuous change, in the...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "ICM",
        "url": "http://localhost:4000/courses/TA/ICM.html",
        "excerpt": "Introduction Fundamentals of Numerical Computation is an advanced undergraduate-level introduction to the mathematics and use of algorithms for the fundamental...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Courses",
        "url": "http://localhost:4000/courses/",
        "excerpt": "Required or Elective Subjects: National Taiwan University 1. Real Analysis 2. Graph Theory 3. Numerical Linear Algebra 4. High-Performance Numerical...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "High-Performance Numerical Solver",
        "url": "http://localhost:4000/courses/subjects/HP_numerical_solver.html",
        "excerpt": "Teacher Edmond Chow Associate Professor School of Computational Science and Engineering College of Computing Georgia Institute of Technology Topics Asynchornous...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Graph Theory",
        "url": "http://localhost:4000/courses/subjects/graph_theory.html",
        "excerpt": "Introduction\n\n圖論的各種研究方法中，重要的有拓樸方法、機率方法、代數方法、演算法。有效的演算法能協助電腦達到快速計算，對實用端有很大的好處。從數學的觀點來看，演算法其實是數學歸納法的化身，所以它可以用來幫忙證明定理；反過來，一些定理的歸納法證明，也常能轉化成演算法。本書在各處盡可能地展現數學歸納法和演算法的一體兩面特性。\n\nText Book\n\n\n  演算法觀點的圖論\n   張鎮華\n   \n\n\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Real Analysis",
        "url": "http://localhost:4000/courses/subjects/real_analysis.html",
        "excerpt": "Introduction Real analysis is the basis of advanced analysis theory, and is also an important tool commonly used in other...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Mini-course (10/17)",
        "url": "http://localhost:4000/courses/workshop/ai_application.html",
        "excerpt": "Date 17 October, 2019 (Thus.) Materials Slide Lecture, Radiomics features introduction Hands-on Download via GitHub, Online demo Agenda Course introduction...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Posts",
        "url": "http://localhost:4000/posts/",
        "excerpt": "2019 Basic LaTeX Symbols July 22, 2019 &emsp; &nbsp; 2 minute read Introduction of LaTeX July 21, 2019 &emsp; &nbsp;...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Cortical Spreading Depression",
        "url": "http://localhost:4000/projects/IBM/CSD.html",
        "excerpt": "Introduction Cortical spreading depression (CSD) is an electrical silent wave across all over the cerebral cortex and impairs some cortical...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Cortical Spreading Depression",
        "url": "http://localhost:4000/projects/IBM/ECS.html",
        "excerpt": "\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Brain Tumor Classification",
        "url": "http://localhost:4000/projects/NTUH/Brain_Tumor.html",
        "excerpt": "Introduction\n\nGoal\n\nData\n\nResults\n\nConclusions\n\nFuture works\n\nReferencess\n\nAcknowledgements\n\nExtesion\n\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Hypopharyngeal Tumor Classification",
        "url": "http://localhost:4000/projects/NTUH/Hypopharyngeal.html",
        "excerpt": "Introduction\n\nGoal\n\nData\n\nResults\n\nConculsions\n\nFuture works\n\nReferences\n\nAcknowledgements\n\nExtension\n\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Radiomics",
        "url": "http://localhost:4000/projects/NTUH/Radiomics.html",
        "excerpt": "Introduction\n\nApplication\n\nTutorial\n\nExtesion\n\n",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Disorder (Mental)",
        "url": "http://localhost:4000/projects/NYMU/disorder.html",
        "excerpt": "Introduction Disorder is often called the hidden disability because our behavior and thinking may have very serious problems, and yet...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
      
      {
        "title": "Projects",
        "url": "http://localhost:4000/projects/",
        "excerpt": "National Taiwan University x National Taiwan University Hospital Brain Tumor Classification Hypopharyngeal Tumor Classification Radiomics National Taiwan University x IBM...",
        "teaser":
          
            "http://localhost:4000/"
          
      },
    
  
    
    
    
      
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
