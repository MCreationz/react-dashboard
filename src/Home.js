import React, { Component } from "react";
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);
 

  const contentxls = [
  {
     
     xls: 'http://mastercreationz.com/Lucidnetwork/xls.png'

  }
];
 const contentpdf = [
  {
     
     pdf: 'http://mastercreationz.com/Lucidnetwork/pdf.png'

  }
];


//first chart start
 const myDataSource = {
	"chart": {
		"theme": "ocean"
	},
	"data": [
		{
			"label": "1s",
			"value": "290"
		},
		{
			"label": "3d",
			"value": "260"
		},
		{
			"label": "3s",
			"value": "180"
		},
		{
			"label": "2",
			"value": "140"
		},
		{
			"label": "2s",
			"value": "115"
		},
		{
			"label": "2",
			"value": "100"
		},
		{
			"label": "US",
			"value": "90"
		},
		{
			"label": "2f",
			"value": "80"
		},
		{
			"label": "4r",
			"value": "70"
		},
		{
			"label": "6f",
			"value": "60"
		},
		{
			"label": "r",
			"value": "50"
		},
		{
			"label": "2e",
			"value": "40"
		},
		{
			"label": "3e",
			"value": "35"
		},
		{
			"label": "4s",
			"value": "25"
		},
		{
			"label": "US",
			"value": "20"
		},
		{
			"label": "4r",
			"value": "15"
		}
	]
};

const chartConfigs = {
  	type: 'column2d',
  	width: 789,
  	height: 138,
  	dataFormat: 'json',
  	dataSource: myDataSource,
};
//first chart ends



//first chart start
 const myDataSourcesec = {
	"chart": {
		"theme": "ocean"
	},
	"data": [
		{
			"label": "1s",
			"value": "290"
		},
		{
			"label": "3d",
			"value": "260"
		},
		{
			"label": "3s",
			"value": "180"
		},
		{
			"label": "2",
			"value": "140"
		},
		{
			"label": "2s",
			"value": "115"
		},
		{
			"label": "2",
			"value": "100"
		},
		{
			"label": "US",
			"value": "90"
		},
		{
			"label": "2f",
			"value": "80"
		},
		{
			"label": "4r",
			"value": "70"
		},
		{
			"label": "6f",
			"value": "60"
		},
		{
			"label": "r",
			"value": "50"
		},
		{
			"label": "2e",
			"value": "40"
		},
		{
			"label": "3e",
			"value": "35"
		},
		{
			"label": "4s",
			"value": "25"
		},
		{
			"label": "US",
			"value": "20"
		},
		{
			"label": "4r",
			"value": "15"
		}
	]
};

const chartConfigssec = {
  	type: 'column2d',
  	width: 789,
  	height: 138,
  	dataFormat: 'json',
  	dataSource: myDataSourcesec,
};
//second chart ends


//third chart start
 const myDataSourcethird = {
	"chart": {
		"theme": "ocean"
	},
	"data": [
		{
			"label": "1s",
			"value": "290"
		},
		{
			"label": "3d",
			"value": "260"
		},
		{
			"label": "3s",
			"value": "180"
		},
		{
			"label": "2",
			"value": "140"
		},
		{
			"label": "2s",
			"value": "115"
		},
		{
			"label": "2",
			"value": "100"
		},
		{
			"label": "US",
			"value": "90"
		},
		{
			"label": "2f",
			"value": "80"
		},
		{
			"label": "4r",
			"value": "70"
		},
		{
			"label": "6f",
			"value": "60"
		},
		{
			"label": "r",
			"value": "50"
		},
		{
			"label": "2e",
			"value": "40"
		},
		{
			"label": "3e",
			"value": "35"
		},
		{
			"label": "4s",
			"value": "25"
		},
		{
			"label": "US",
			"value": "20"
		},
		{
			"label": "4r",
			"value": "15"
		}
	]
};

const chartConfigsthird = {
  	type: 'column2d',
  	width: 789,
  	height: 138,
  	dataFormat: 'json',
  	dataSource: myDataSourcethird,
};
//third chart ends

class Home extends Component {
  render() {
    return (
      <div>
      <div className="row">
            <div className=" col-left">
            <p>Number of Guarantees per Beneficiary</p>
            <div class="lineone"></div>
            </div>
            <div className=" col-right">
            <div className="chart_outer">
             <ReactFC {...chartConfigs} />
             </div>
            </div>

             <div className=" col-end">
             <div className="xls_outer"> {contentxls.map((item, index) => (        
          <a className="navbar-brand logoswit" href="index.html"  style={{ background: `url('${item.xls}') no-repeat center center` }}>
          </a>
 ))}</div>


 <div className="pdf_outer"> {contentpdf.map((item, index) => (        
          <a className="navbar-brand logoswit" href="index.html"  style={{ background: `url('${item.pdf}') no-repeat center center` }}>
          </a>
 ))}</div>


 </div>

       </div>

       <div className="row">
            <div className=" col-left">
            <p>Number of Guarantees per Deptor</p>
             <div class="lineone"></div>
            </div>
            <div className="col-right">
             <div className="chart_outer">
             <ReactFC {...chartConfigssec} />
             </div>
            </div>

             <div className="col-end"></div>

       </div>


       <div className="row">
            <div className="col-left">
            <p>Number of Guarantees per Bank</p>
             <div class="lineone"></div>
            </div>
            <div className=" col-right">
            <div className="chart_outer">
             <ReactFC {...chartConfigsthird} />
             </div>
            </div>

             <div className=" col-end"></div>

       </div>


       
          
             
 
        
      </div>
    );
  }
}
 
export default Home;