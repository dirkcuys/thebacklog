function create_user_graph(){ 
  var data = [
  { label: 'CAIULQS142220300AC', links: [{index:6, weight:49.86258}]},
  { label: 'CAFQYWK142076ABC30', links: [{index:9, weight:37.25206},{index:38, weight:37.249912},{index:57, weight:37.082634},{index:58, weight:37.252235},{index:6, weight:37.083},{index:52, weight:37.250137}]},
  { label: 'CAMIKAH142077C0AFA', links: [{index:18, weight:200.77112},{index:39, weight:468.27472},{index:48, weight:197.95068},{index:79, weight:200.42961}]},
  { label: 'CAWZWYA141E76A0D47', links: [{index:44, weight:40.042473},{index:13, weight:39.989433},{index:63, weight:122.36953},{index:71, weight:40.04311},{index:27, weight:39.308483},{index:32, weight:39.990208},{index:46, weight:40.0435},{index:40, weight:122.37107},{index:42, weight:40.04289},{index:68, weight:40.249256},{index:75, weight:40.042088},{index:78, weight:122.36919}]},
  { label: 'CAXPHSA142072B84AF', links: [{index:59, weight:79.54525},{index:41, weight:80.098045}]},
  { label: 'CALRJFZ142077A5280', links: [{index:14, weight:47.781487},{index:17, weight:60.814713},{index:20, weight:47.77138},{index:31, weight:63.14364},{index:35, weight:221.89627},{index:45, weight:60.898575},{index:73, weight:61.9159},{index:80, weight:63.10412}]},
  { label: 'CAOEJTC142220397FC', links: [{index:69, weight:59.34733},{index:37, weight:59.35323},{index:0, weight:59.609283},{index:45, weight:59.17807},{index:34, weight:74.958694}]},
  { label: 'CABVECP1420765293B', links: [{index:65, weight:55.152008}]},
  { label: 'CAXFAKO142077F851C', links: [{index:62, weight:103.050835}]},
  { label: 'CACVERN142074E8512', links: [{index:23, weight:68.00021}]},
  { label: 'CADAERI142079A5822', links: [{index:27, weight:79.19268},{index:64, weight:74.84769},{index:42, weight:72.666}]},
  { label: 'CAPFRMG14207A3536F', links: [{index:53, weight:131.36772}]},
  { label: 'CAUWRRD1420789A6FC', links: [{index:74, weight:440.1998},{index:33, weight:384.1048},{index:64, weight:133.05591},{index:50, weight:440.52304},{index:49, weight:132.09708},{index:67, weight:133.05165},{index:61, weight:384.35394}]},
  { label: 'CAQFGCC14221FBE87A', links: [{index:27, weight:224.43172},{index:30, weight:61.791294}]},
  { label: 'CAUYAAO1420720E04F', links: []},
  { label: 'CAUSXRN142076B2AA0', links: [{index:17, weight:52.34088},{index:45, weight:52.274147},{index:54, weight:52.356228},{index:62, weight:51.765045},{index:72, weight:52.360447},{index:77, weight:52.274918}]},
  { label: 'CAJQRLP14207AA0402', links: [{index:26, weight:234.23083},{index:35, weight:62.283875},{index:41, weight:62.329765},{index:72, weight:62.285442},{index:78, weight:62.31758}]},
  { label: 'CAHKORD14207321ABC', links: [{index:23, weight:51.69724},{index:29, weight:191.0867},{index:45, weight:194.34134},{index:70, weight:51.692142},{index:77, weight:194.01529}]},
  { label: 'CAZUEIN14222040F2A', links: [{index:2, weight:189.72757},{index:39, weight:189.72874},{index:48, weight:193.66197},{index:79, weight:190.72575}]},
  { label: 'CAWCOIY14207ABAC5A', links: [{index:23, weight:0.006453575},{index:31, weight:96.09245}]},
  { label: 'CASHCJD14207657F68', links: [{index:14, weight:50.09734},{index:35, weight:50.08629}]},
  { label: 'CAEDJIE141E7815B64', links: [{index:47, weight:49.775486}]},
  { label: 'CAGSFOC14207123350', links: [{index:43, weight:59.4112},{index:62, weight:58.328075}]},
  { label: 'CAAVFFO142078CE8FB', links: [{index:9, weight:77.48409}]},
  { label: 'CAHFGKQ1420799FE50', links: [{index:29, weight:199.42545},{index:12, weight:65.65773},{index:48, weight:204.03992},{index:50, weight:65.40874},{index:8, weight:65.40511},{index:74, weight:210.60457},{index:79, weight:199.43376}]},
  { label: 'CASGMBR142077304A6', links: [{index:41, weight:171.1684},{index:57, weight:171.41313},{index:38, weight:102.39749},{index:76, weight:171.41649}]},
  { label: 'CAODWUZ14207458DE6', links: [{index:13, weight:62.83946},{index:16, weight:202.7455},{index:28, weight:62.967056},{index:30, weight:63.03565},{index:42, weight:78.18929}]},
  { label: 'CATBIMJ141E7862CB3', links: [{index:44, weight:48.21693},{index:10, weight:80.824936},{index:13, weight:183.3009},{index:63, weight:48.215008},{index:71, weight:48.217957},{index:32, weight:48.203434},{index:46, weight:48.21795},{index:40, weight:48.217445},{index:47, weight:47.689583},{index:3, weight:47.691563},{index:55, weight:47.689056},{index:42, weight:48.21788},{index:68, weight:48.284447},{index:75, weight:48.216602},{index:78, weight:48.21482}]},
  { label: 'CAVONNL142077AE2FF', links: [{index:45, weight:64.08769}]},
  { label: 'CAYUSON14207525263', links: [{index:17, weight:272.5499},{index:18, weight:73.31119},{index:70, weight:73.30655},{index:24, weight:242.55768},{index:48, weight:242.56902},{index:60, weight:164.75302},{index:23, weight:73.3024},{index:79, weight:245.07053}]},
  { label: 'CAEHBOA14207105229', links: [{index:26, weight:45.392227},{index:28, weight:44.07203}]},
  { label: 'CAGMDKE142076BE56A', links: [{index:5, weight:62.192062},{index:19, weight:79.16435},{index:35, weight:62.32519},{index:51, weight:44.658604},{index:73, weight:61.147644},{index:80, weight:62.20127}]},
  { label: 'CADDMVD142078D8545', links: [{index:63, weight:264.94678}]},
  { label: 'CANXBYL14207A8174B', links: [{index:12, weight:629.8925},{index:48, weight:391.17294},{index:61, weight:1210.5432}]},
  { label: 'CAQFGFV1420777EAC8', links: [{index:4, weight:38.386497},{index:6, weight:56.69998}]},
  { label: 'CABRDRJ14207101C78', links: [{index:5, weight:195.09581},{index:14, weight:42.115826},{index:20, weight:42.107018},{index:26, weight:47.04429},{index:31, weight:55.610607},{index:16, weight:47.039673},{index:41, weight:47.04382},{index:72, weight:46.939156},{index:73, weight:54.34087},{index:78, weight:47.03641},{index:80, weight:55.557133}]},
  { label: 'CAFQVTS14207A95B69', links: [{index:12, weight:63.027744},{index:50, weight:63.133427},{index:49, weight:63.287464},{index:67, weight:63.027493},{index:61, weight:63.121376},{index:64, weight:63.038418}]},
  { label: 'CAQTVFG14207745944', links: [{index:69, weight:64.423874},{index:39, weight:69.17767},{index:6, weight:64.29835},{index:45, weight:64.29777}]},
  { label: 'CALOPSB142071CE292', links: [{index:63, weight:141.47961}]},
  { label: 'CAWNKNJ142077E8C6F', links: [{index:2, weight:541.40796},{index:18, weight:231.84901},{index:79, weight:231.76251}]},
  { label: 'CAWFMNC14221E035DD', links: [{index:13, weight:63.204376},{index:63, weight:192.8586},{index:32, weight:63.20528},{index:47, weight:64.29528},{index:3, weight:196.76334},{index:55, weight:64.30867},{index:68, weight:63.194065},{index:71, weight:63.127655},{index:78, weight:192.86261},{index:27, weight:64.29801}]},
  { label: 'CAODNHP14207242DCF', links: [{index:4, weight:90.23304},{index:16, weight:54.81869},{index:25, weight:172.37965},{index:26, weight:54.809956},{index:57, weight:172.37633},{index:59, weight:89.3755},{index:76, weight:172.37816}]},
  { label: 'CASDXQC14207915BDC', links: [{index:10, weight:86.29588},{index:26, weight:73.89415}]},
  { label: 'CAXTFOI141E7829597', links: [{index:69, weight:63.882374}]},
  { label: 'CAXOCOL142074D57B9', links: [{index:13, weight:42.578625},{index:63, weight:42.494747},{index:71, weight:42.496883},{index:32, weight:42.579144},{index:46, weight:42.496964},{index:40, weight:42.496468},{index:47, weight:41.972626},{index:3, weight:41.97453},{index:55, weight:41.972637},{index:42, weight:42.496525},{index:68, weight:42.433002},{index:75, weight:42.496544},{index:78, weight:42.494804},{index:27, weight:41.97421}]},
  { label: 'CAZUXRO14221FF7580', links: [{index:5, weight:64.092},{index:17, weight:241.48332},{index:28, weight:68.276764}]},
  { label: 'CAGRQIG14207682F77', links: [{index:71, weight:199.03041}]},
  { label: 'CAVCKSO1420777F509', links: [{index:44, weight:56.94608},{index:13, weight:56.997677},{index:21, weight:79.921326},{index:63, weight:56.945496},{index:71, weight:56.94602},{index:27, weight:56.191433},{index:32, weight:56.99779},{index:46, weight:56.94742},{index:75, weight:56.945988},{index:42, weight:56.94308},{index:3, weight:56.187645},{index:55, weight:56.18739},{index:68, weight:56.987072},{index:40, weight:56.945198},{index:78, weight:56.940105}]},
  { label: 'CAYBATX142077346C4', links: [{index:2, weight:341.91757},{index:18, weight:342.52744},{index:39, weight:341.92014},{index:70, weight:332.13168},{index:79, weight:711.3864}]},
  { label: 'CATSOHL142077706F1', links: [{index:74, weight:71.52084},{index:50, weight:71.45481},{index:33, weight:71.520905}]},
  { label: 'CAFGHWQ142075D7184', links: [{index:67, weight:68.22421},{index:49, weight:69.07236},{index:33, weight:68.88321},{index:36, weight:68.51583},{index:74, weight:230.50188},{index:12, weight:228.22777},{index:61, weight:68.49451},{index:64, weight:68.24186}]},
  { label: 'CADBKFQ142073EDE87', links: []},
  { label: 'CAOODBJ1420763F943', links: [{index:1, weight:46.58471},{index:56, weight:61.85252},{index:9, weight:46.58431},{index:57, weight:46.18546},{index:58, weight:46.585228},{index:38, weight:46.59265},{index:62, weight:60.97629},{index:65, weight:60.975613},{index:6, weight:46.188046}]},
  { label: 'CAIJGZM142079AA93B', links: [{index:11, weight:180.07896}]},
  { label: 'CAOYEUP142071EB597', links: [{index:15, weight:62.10064},{index:17, weight:61.941376},{index:45, weight:61.916145},{index:72, weight:62.095345},{index:77, weight:204.37456}]},
  { label: 'CAXZUZF142076552E8', links: [{index:71, weight:240.74379}]},
  { label: 'CACPVKP14221E30470', links: [{index:62, weight:76.17377},{index:65, weight:76.17289},{index:52, weight:75.83905}]},
  { label: 'CAVODLW142077E33C3', links: [{index:25, weight:200.98703},{index:38, weight:203.42604},{index:70, weight:203.06236},{index:76, weight:200.98892}]},
  { label: 'CAGGQFK142073FFF97', links: [{index:17, weight:55.85491},{index:29, weight:55.78712},{index:28, weight:55.832653}]},
  { label: 'CAJQZHI1420777A92B', links: [{index:4, weight:61.10665},{index:41, weight:60.50309}]},
  { label: 'CAVDSKD142072DE060', links: [{index:29, weight:133.84637}]},
  { label: 'CACCRAQ142078EC5BD', links: [{index:33, weight:345.85156},{index:12, weight:183.33412},{index:48, weight:113.89028}]},
  { label: 'CADHKKM14207431865', links: [{index:22, weight:58.512398},{index:43, weight:58.613182},{index:56, weight:55.520405},{index:8, weight:109.7412},{index:65, weight:55.151016},{index:52, weight:55.48484}]},
  { label: 'CADEYRC142074A5F5C', links: [{index:32, weight:206.64252},{index:75, weight:393.72958}]},
  { label: 'CAOCAZY142075C2BA8', links: [{index:33, weight:71.78236},{index:36, weight:71.59699},{index:49, weight:71.8553},{index:50, weight:71.620316},{index:61, weight:71.58773},{index:67, weight:71.4739},{index:74, weight:71.79312}]},
  { label: 'CAOPKFV14221DD937B', links: [{index:56, weight:56.624706},{index:11, weight:43.21803},{index:7, weight:58.859882},{index:53, weight:43.216755},{index:62, weight:56.878418},{index:52, weight:56.062614}]},
  { label: 'CACJSRX14221F611B0', links: [{index:72, weight:56.44348}]},
  { label: 'CARARSZ142077A7ED9', links: [{index:33, weight:68.43825},{index:36, weight:68.81753},{index:74, weight:68.45379},{index:61, weight:68.82994},{index:50, weight:68.8432},{index:49, weight:68.80781}]},
  { label: 'CAWUOGN14207561CCB', links: [{index:44, weight:55.01428},{index:13, weight:55.122883},{index:63, weight:55.019245},{index:71, weight:55.012733},{index:27, weight:54.373684},{index:32, weight:55.13026},{index:46, weight:55.01297},{index:40, weight:55.019115},{index:47, weight:54.375088},{index:3, weight:54.380924},{index:55, weight:54.375225},{index:42, weight:55.012573},{index:75, weight:55.020535},{index:78, weight:55.01942}]},
  { label: 'CARKOWS14207669606', links: [{index:43, weight:65.95035}]},
  { label: 'CAZQJLD14207434D08', links: [{index:48, weight:180.41656},{index:77, weight:184.08646}]},
  { label: 'CAQBMZD14221D8A6F5', links: [{index:55, weight:155.14113},{index:46, weight:150.87369}]},
  { label: 'CANHKBL1420748B42A', links: [{index:15, weight:58.091248},{index:17, weight:57.920498},{index:45, weight:57.916958},{index:54, weight:58.08561},{index:66, weight:93.795166},{index:77, weight:57.917057},{index:78, weight:180.82288}]},
  { label: 'CAMGSVB142071A1337', links: [{index:5, weight:86.57637},{index:15, weight:70.26781},{index:31, weight:86.64487},{index:35, weight:86.80027},{index:80, weight:317.49185}]},
  { label: 'CAIXWBL142079BF51F', links: [{index:24, weight:213.44707},{index:33, weight:96.290344},{index:12, weight:326.06152},{index:64, weight:97.54684},{index:50, weight:322.5981},{index:49, weight:96.75446},{index:67, weight:97.54829},{index:61, weight:96.28944}]},
  { label: 'CALVBKJ14221ED24D8', links: [{index:63, weight:332.75858}]},
  { label: 'CAJRZCK1422207190A', links: [{index:41, weight:168.74538},{index:25, weight:168.86218},{index:57, weight:168.85876}]},
  { label: 'CARLCUP142072FBEFE', links: [{index:70, weight:246.11244},{index:17, weight:274.11426},{index:48, weight:242.76733}]},
  { label: 'CAGECXQ14207ABA10B', links: [{index:44, weight:65.40547},{index:13, weight:65.41665},{index:63, weight:199.85732},{index:71, weight:65.40665},{index:27, weight:67.17364},{index:32, weight:65.42012},{index:46, weight:65.405624},{index:40, weight:199.85785},{index:47, weight:67.170586},{index:3, weight:205.55789},{index:55, weight:67.17514},{index:42, weight:65.406204},{index:68, weight:65.50639},{index:72, weight:189.09467},{index:75, weight:65.40466}]},
  { label: 'CACYBFL1420758D744', links: [{index:2, weight:233.69481},{index:18, weight:234.05159},{index:39, weight:233.69995},{index:48, weight:480.9165}]},
  { label: 'CAABCWP142070D58C0', links: [{index:5, weight:57.013836},{index:31, weight:57.16427},{index:35, weight:57.25485},{index:73, weight:204.73274}]}
  ];
  
  var link_data = [];
  for (var i = 0; i < data.length; ++i) {
      for (var j = 0; j < data[i].links.length; ++j){
          link_data.push({
              source: data[i],
              target: data[data[i].links[j].index],
              weight: data[i].links[j].weight
          });
      }
  }
  
  var width = 500, height = 300;
  
  var svg = d3.select("#user_graph")
      .attr("width", width)
      .attr("height", height);
  
  var force = d3.layout.force()
      .nodes(data)
      .charge(function(d){ return -0.5*d.r; })
      .links(link_data)
  .linkDistance(function(d){ return 10+Math.max(300 - d.weight,0)/2.0; })
      .gravity(0)
      .size([width/2.0, height/2.0]);
  
  var links = svg.selectAll(".link").data(link_data);
  links.enter().append("line")
        .attr("class", "link")
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })
        .style('stroke-width', function(d) { return d.weight/100.0; })
        .style('stroke', '#9ecae1');
  
  var nodes = svg.selectAll("circle").data(data);
  
  nodes.enter().append("circle")
      .attr("cx", function(d){ return d.x; })
      .attr("cy", function(d){ return d.y; })
      .call(force.drag);
  
  nodes.attr("r", 0)
      .style({'fill': function(d){ return d3.rgb(255,255*Math.random(),64*Math.random()).toString() }})
      .attr("r", 8);
  
  /*var labels = svg.selectAll("g").data(data);
  labels.enter().append('g').append('text')
      .text(function(d) { return d.label; })
      .attr('text-anchor', 'middle')
      .style("font-size", function(d) { return "" + d.r/4 + "px"; });
  
  labels.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });*/
  
  
  
  force.on("tick", function(e){
      // Push nodes toward their designated focus.
      var k = .1 * e.alpha;
      data.forEach(function(o, i){
          o.y += (height/2.0 - o.y) * k;
          o.x += (width/2.0 - o.x) * k;
      });
  
      nodes.attr("cx", function(d){ return d.x; })
          .attr("cy", function(d){ return d.y; });
      //labels.attr("transform", function(d){ return "translate(" + d.x + "," + d.y + ")"; });
      
      links
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
  });
  
  force.start();
}