function top100(){  
  var data = [
  {x:0, y:0, r:310, label:'Daft Punk'},
  {x:0, y:0, r:246, label:'Radiohead'},
  {x:0, y:0, r:236, label:'The Beatles'},
  {x:0, y:0, r:206, label:'Pink Floyd'},
  {x:0, y:0, r:204, label:'Kanye West'},
  {x:0, y:0, r:143, label:'Michael Jackson'},
  {x:0, y:0, r:143, label:'Coldplay'},
  {x:0, y:0, r:140, label:'Avicii'},
  {x:0, y:0, r:131, label:'Led Zeppelin'},
  {x:0, y:0, r:127, label:'Metallica'},
  {x:0, y:0, r:125, label:'Beatles'},
  {x:0, y:0, r:116, label:'Muse'},
  {x:0, y:0, r:113, label:'Queen'},
  {x:0, y:0, r:108, label:'Skrillex'},
  {x:0, y:0, r:107, label:'Deadmau5'},
  {x:0, y:0, r:103, label:'Eminem'},
  {x:0, y:0, r:97, label:'U2'},
  {x:0, y:0, r:94, label:'Drake'},
  {x:0, y:0, r:90, label:'Linkin Park'},
  {x:0, y:0, r:89, label:'Kendrick Lamar'},
  {x:0, y:0, r:89, label:'Tool'},
  {x:0, y:0, r:84, label:'Arcade Fire'},
  {x:0, y:0, r:84, label:'John Mayer'},
  {x:0, y:0, r:81, label:'Foo Fighters'},
  {x:0, y:0, r:80, label:'Tiesto'},
  {x:0, y:0, r:77, label:'Prince'},
  {x:0, y:0, r:77, label:'Justin Timberlake'},
  {x:0, y:0, r:73, label:'Nine Inch Nails'},
  {x:0, y:0, r:72, label:'Miles Davis'},
  {x:0, y:0, r:72, label:'Red Hot Chili Peppers'},
  {x:0, y:0, r:67, label:'Jimi Hendrix'},
  {x:0, y:0, r:67, label:'Bob Dylan'},
  {x:0, y:0, r:66, label:'Hardwell'},
  {x:0, y:0, r:65, label:'Zedd'},
  {x:0, y:0, r:63, label:'Adele'},
  {x:0, y:0, r:60, label:'Pearl Jam'},
  {x:0, y:0, r:60, label:'Imagine Dragons'},
  {x:0, y:0, r:58, label:'David Guetta'},
  {x:0, y:0, r:58, label:'Rush'},
  {x:0, y:0, r:55, label:'Maroon 5'},
  {x:0, y:0, r:53, label:'Bon Iver'},
  {x:0, y:0, r:53, label:'Nirvana'},
  {x:0, y:0, r:52, label:'Jay-Z'},
  {x:0, y:0, r:51, label:'Hans Zimmer'},
  {x:0, y:0, r:50, label:'Dream Theater'},
  {x:0, y:0, r:49, label:'David Bowie'},
  {x:0, y:0, r:49, label:'Bob Marley'},
  {x:0, y:0, r:48, label:'Iron Maiden'},
  {x:0, y:0, r:48, label:'Calvin Harris'},
  {x:0, y:0, r:48, label:'Bonobo'},
  {x:0, y:0, r:47, label:'Armin Van Buuren'},
  {x:0, y:0, r:47, label:'Lady Gaga'},
  {x:0, y:0, r:46, label:'Incubus'},
  {x:0, y:0, r:46, label:'Beethoven'},
  {x:0, y:0, r:46, label:'Eric Clapton'},
  {x:0, y:0, r:45, label:'Mozart'},
  {x:0, y:0, r:45, label:'Mumford and Sons'},
  {x:0, y:0, r:45, label:'Jay Z'},
  {x:0, y:0, r:44, label:'Stevie Wonder'},
  {x:0, y:0, r:44, label:'Sigur Ros'},
  {x:0, y:0, r:42, label:'Depeche Mode'},
  {x:0, y:0, r:42, label:'Swedish House Mafia'},
  {x:0, y:0, r:41, label:'Arctic Monkeys'},
  {x:0, y:0, r:41, label:'Nas'},
  {x:0, y:0, r:41, label:'LCD Soundsystem'},
  {x:0, y:0, r:41, label:'Kaskade'},
  {x:0, y:0, r:41, label:'Katy Perry'},
  {x:0, y:0, r:41, label:'James Blake'},
  {x:0, y:0, r:40, label:'Tom Waits'},
  {x:0, y:0, r:39, label:'Bruno Mars'},
  {x:0, y:0, r:39, label:'deadmau5'},
  {x:0, y:0, r:38, label:'The National'},
  {x:0, y:0, r:37, label:'Boards of Canada'},
  {x:0, y:0, r:37, label:'Mumford & Sons'},
  {x:0, y:0, r:37, label:'Jack Johnson'},
  {x:0, y:0, r:37, label:'Dave Matthews Band'},
  {x:0, y:0, r:36, label:'Knife Party'},
  {x:0, y:0, r:36, label:'The Killers'},
  {x:0, y:0, r:36, label:'The Roots'},
  {x:0, y:0, r:36, label:'Justice'},
  {x:0, y:0, r:35, label:'Moby'},
  {x:0, y:0, r:35, label:'Billy Joel'},
  {x:0, y:0, r:35, label:'J Dilla'},
  {x:0, y:0, r:34, label:'Green Day'},
  {x:0, y:0, r:34, label:'Bach'},
  {x:0, y:0, r:34, label:'Gorillaz'},
  {x:0, y:0, r:33, label:'daft punk'},
  {x:0, y:0, r:33, label:'The Black Keys'},
  {x:0, y:0, r:33, label:'Massive Attack'},
  {x:0, y:0, r:33, label:'Vampire Weekend'},
  {x:0, y:0, r:33, label:'Sting'},
  {x:0, y:0, r:33, label:'Taylor Swift'},
  {x:0, y:0, r:32, label:'Bjork'},
  {x:0, y:0, r:32, label:'Johnny Cash'},
  {x:0, y:0, r:31, label:'Armin van Buuren'},
  {x:0, y:0, r:31, label:'Diplo'},
  {x:0, y:0, r:31, label:'Rolling Stones'},
  {x:0, y:0, r:31, label:'Switchfoot'},
  {x:0, y:0, r:31, label:'Frank Ocean'},
  {x:0, y:0, r:31, label:'Disclosure'}
  ];
  
  var width = 500, height = 500;
  
  var svg = d3.select("#top100")
      .attr("width", width)
      .attr("height", height);
  
  var nodes = svg.selectAll("circle").data(data);
  
  nodes.enter().append("circle")
      .attr("cx", function(d){ return d.x; })
      .attr("cy", function(d){ return d.y; });
  
  nodes.attr("r", 0)
      .style({'fill': function(d){ return d3.rgb(255,255*Math.random(),64*Math.random()).toString() }})
      .transition()
      .duration(1000)
      .attr("r", function(d){ return d.r/5.0; });
  
  var labels = svg.selectAll("g").data(data);
  labels.enter().append('g').append('text')
      .text(function(d) { return d.label; })
      .attr('text-anchor', 'middle')
      .style("font-size", function(d) { return "" + d.r/12 + "px"; });
  
  labels.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });
  
  var force = d3.layout.force()
      .nodes(data)
      .charge(function(d){ return -0.5*d.r; })
      .links([])
      .gravity(0)
      .size([width/2.0, height/2.0]);
  
  force.on("tick", function(e){
      // Push nodes toward their designated focus.
      var k = .1 * e.alpha;
      data.forEach(function(o, i){
          o.y += (height/2.0 - o.y) * k;
          o.x += (width/2.0 - o.x) * k;
      });
  
      nodes.attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; });
      labels.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });
  });
  
  force.start();
}