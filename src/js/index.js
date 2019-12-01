window.onload = function () {
    function current() {
        var currentYear = echarts.init(document.getElementById('currentYear'));
             // 指定图表的配置项和数据
    let   option = {
                title: {
                     text: ''
                },
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        color:'#38b3c8'
                    },
                    // formatter:`{c}%`
                },
                legend: {
                    data:['一类','二类','三类','四类','五类'],
                    textStyle:{
                        color: "#fff",
                        opacity: 8,
                        borderRadius: "5px",
                        fontSize: " 14px",
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['陈村', '均安', '杏园', '北浅', '乐从', '龙江'],
                    axisLine: {
                        lineStyle:{
                            color: '#3b4f96',
                            width:1//这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#38b3c8'
                        }
                    }
                },
            yAxis: {
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color:'#3b4f96'
                        }
                    },
                    nameTextStyle: {
                        color:'#3b4f96'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3b4f96',
                            width:1
                        }
                    },
                    axisLabel:{
                        formatter: function (val) {
                            return val.toFixed(1)+'%';
                        },
                        textStyle: {
                            color: '#38b3c8'
                        }
                        
                },
                min: 55,
                max: 95,
                splitNumber: 8,
                scale: true,
                show: true,
                },
                series: [
                    {
                        name:'一类',
                        type:'line',
                        data: [90, 91, 89, 86, 91, 81],
                        smooth:true
                    },
                    {
                        name:'二类',
                        type:'line',
                        data: [84, 80, 81, 76, 80, 77],
                        smooth:true
                    },
                    {
                        name:'三类',
                        type:'line',
                        data: [77, 76, 82, 75, 73, 80],
                        smooth:true
                    },
                    {
                        name:'四类',
                        type:'line',
                        data: [76, 75, 80, 74, 70, 66],
                        smooth:true
                    },
                    {
                        name:'五类',
                        type:'line',
                        data: [70, 63, 65, 72, 66, 80],
                        smooth:true
                    }
                ]
            };
            // 使用刚指定的配置项和数据显示图表。
            currentYear.setOption(option);
    }
    current();
    function primaryIn() {
        var primaryIndustry = echarts.init(document.getElementById('primaryIndustry'));
       let  option = {
            title: {
                text: '当月实时统计',
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    x:'center'
                }
            },
            color:['#fbdd00','#e5ebd7'],//#f58376 #bc59e4 #89fd06 #2ab0ff #fdba00
            series: [
                {
                    name:'当月实时统计',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize:'18'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:35974, name:'64%'},
                        {value:20235, name:''},
                    ]
                }
            ]
        };
        primaryIndustry.setOption(option);
    }
    primaryIn();
    function secondary(){
        var secondaryIndustry = echarts.init(document.getElementById('secondaryIndustry'));
       let option = {
            title: {
                text: '当月实时统计',
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    x:'center'
                }
            },
            color:['#f58376','#e5ebd7'],//#f58376 #bc59e4 #89fd06 #2ab0ff #fdba00
            series: [
                {
                    name:'当月实时统计',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize:'18'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:59875, name:'86%'},
                        {value:9747, name:''},
                    ]
                }
            ]
        };
        secondaryIndustry.setOption(option);
    };
    secondary();
    //tertiaryIndustry
    function tertiary(){
        var tertiaryIndustry = echarts.init(document.getElementById('tertiaryIndustry'));
      let  option = {
            title: {
                text: '当月实时统计',
                textStyle: {
                    color: '#fff',
                    fontSize: '12',
                    x:'center'
                }
            },
            color:['#bc59e4','#e5ebd7'],//#f58376 #bc59e4 #89fd06 #2ab0ff #fdba00
            series: [
                {
                    name:'当月实时统计',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            textStyle: {
                                fontSize:'18'
                            }
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:18652, name:'47%'},
                        {value:21033, name:''},
                    ]
                }
            ]
        };
        tertiaryIndustry.setOption(option);
    };
    tertiary();
    function industries() {
        var indChart = echarts.init(document.getElementById('industries'));
        let  option = {
            title:{
                text:'当月总体实时统计',
                textStyle:{
                    color:'#fff',
                    fontSize: '12'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            color:['#89fd06',' #2ab0ff' ,'#fdba00'],
            series: [
                {
                    name:'当月总体实时统计',
                    type:'pie',
                    radius: ['50%', '70%'],
                    center:['50%','32%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                            fontSize:'14'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '12',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:36632, name:'内资企业'},
                        {value:60671, name:'外资企业'},
                        {value:17171, name:'其他'},
                    ]
                }
            ],
            legend: {
                orient: 'vertical',
                y: '200px',
                data: ['内资企业', '外资企业', '其他'],
                textStyle: {
                    color:'#fff'
                }
            }
        };
        
        
        indChart.setOption(option);
    }
    industries();
    function equipment() {
        var equipmentChart = echarts.init(document.getElementById('equipment'));
        let option = {
            color: ['#38b3c8'],
            grid: {
                height: 110,
                width:325,
                top:10
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    lineStyle:{
                        color: '#38b3c8',
                        width:1//这里是为了突出显示加上的
                    }
                }
            },
            yAxis: {
                type: 'value',
                min:0,
                max: 400,
                // splitNUmver:100,
                axisLabel:{
                    formatter:function(val){
                        return val
                    },
                    textStyle:{
                        color:'#38b3c8'
                    }
                    
                },
                splitLine: {
                    lineStyle: {
                        color:'transparent'
                    }
                },
                nameTextStyle: {
                    color:'#3b4f96'
                },
                axisLine: {
                    lineStyle: {
                        color: '#38b3c8',
                        width:1
                    }
                },
                show: true
            },
            series: [{
                data: [200, 320, 230,180, 390, 310,360],
                type: 'line',
                smooth:true,
                symbolSize: 0,
                areaStyle: {
                    color:'#38b3c8'
                }
            }]
        };
        equipmentChart.setOption(option);
    }
    equipment();

    function hiddenDan() {
        var hiddenDanger = echarts.init(document.getElementById('hiddenDanger'));
        let option = {
            legend: {
                right: 20,
                itemWidth: 16,
                textStyle: {
                    color: '#fff',
             }
            },
            grid: {
                containLabel: true,
                left: '3%',
                right: '4%',
                bottom:'3%'
            },
            
         tooltip: {
             trigger: 'axis',
             textStyle: {
                 color:'#38b3c8'
             }
         },
         color:['#05daf8','#0476be'],
         dataset: {
             source: [
                 ['Hidden danger', '当月', '较上月'],
                 ['一月', 130, 120],
                 ['二月', 120, 116],
                 ['三月', 116, 113],
                 ['四月', 118, 128],
                 ['五月', 117, 122],
                 ['六月', 102, 115],
                 ['七月', 132, 121],
                 ['八月', 122 , 118],
                 ['九月', 119, 115],
                 ['十月', 120, 128],
                 ['十一月',119 ,124 ],
                 ['十二月', 117 , 119]
             ]
         },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle:{
                        color: '#3b4f96',
                        width:1//这里是为了突出显示加上的
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#38b3c8'
                    }
                }

            },
         yAxis: {
             min:0,
             max:140,
             splitNumber: 7,
             splitLine: {
                lineStyle: {
                    color:'#3b4f96'
                }
            },
            nameTextStyle: {
                color:'#3b4f96'
            },
            axisLine: {
                lineStyle: {
                    color: '#3b4f96',
                    width:1
                }
            },
            axisLabel:{
                textStyle: {
                    color: '#38b3c8'
                }
                
           }
         },
         // Declare several bar series, each will be mapped
         // to a column of dataset.source by default.
         series: [
             {type: 'bar'},
             {type: 'bar'}
         ]
        };
        hiddenDanger.setOption(option);
    };
    hiddenDan();
    function risklevel() {
        var riskLevel = echarts.init(document.getElementById('riskLevel'));
        let option = {
            title: {
                text: '企业风险隐患级别',
                textStyle:{
                    color:'transparent'
                }
            },
            color:['#0a6b4e','#538d38','#543253'],
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                },
                formatter:`{c}%`
            },
            legend: {
                data: ['轻度', '严重', '较严重'],
                textStyle: {
                    color:"#fff"
                },
                right:20
            },
            grid: {
                left: '2%',
                right: '5%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data: ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年'],
                    axisLine: {
                        lineStyle:{
                            color: '#3b4f96',
                            width:1//这里是为了突出显示加上的
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#38b3c8'
                        }
                    },
                    nameTextStyle: {
                        align:'left'
                    }
                }
            ],
            yAxis : [
                {
                    type: 'value',
                    axisLabel:{
                        formatter: function (val) {
                            return `${val.toFixed(1)}%`
                        },
                        textStyle:{
                            color:'#38b3c8'
                        }
                        
                    },
                    axisPointer: {
                        label: {
                            formatter:function (param) {
                                return `${param.value.toFixed(1)}%`
                              }
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color:'#3b4f96'
                        }
                    },
                    nameTextStyle: {
                        color:'#3b4f96'
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#3b4f96',
                            width:1
                        }
                    },
                    show: true
                }
            ],
            series : [
                {
                    name:'轻度',
                    type:'line',
                    data: [0, 0, 0, 58, 85, 10, 0],
                    smooth: true,
                    symbolSize: 6,
                    areaStyle:{}
                },
                {
                    name:'较严重',
                    type:'line',
                    data:[0, 0, 0, 32, 66, 20, 5],
                    smooth: true,
                    symbolSize: 6,
                    areaStyle:{}
                },
                {
                    name:'严重',
                    type:'line',
                    data:[78, 68, 22, 5, 0, 0, 0],
                    smooth: true,
                    symbolSize: 6,
                    areaStyle:{}
                }
            ],
        };
        
        riskLevel.setOption(option);
    };
    risklevel();
    function companytype() {
        var companyType = echarts.init(document.getElementById('companyType'));
        let option = {
            legend: {
                right: 20,
                itemWidth: 16,
                textStyle: {
                    color: '#fff',
                },
                icon:'circle'
            },
            grid: {
                containLabel: true,
                left: '3%',
                right: '4%',
                bottom:'3%'
            },
            
         tooltip: {
             trigger: 'axis',
             textStyle: {
                 color:'#38b3c8'
             },
            //  formatter:`${a}<br/>${b}:${c}%{d}`
         },
         color:['#12d5e9','#feb246','#b065ed'],
         dataset: {
             source: [
                 ['Hidden danger', '上限隐患', '已整改','安全分析'],
                 ['一月', 70,58,62],
                 ['二月', 78,65,80],
                 ['三月', 78,80,65],
                 ['四月', 41,56,50],
                 ['五月', 76,80,86],
                 ['六月', 70,68,62],
                 ['七月', 70,62,58],
                 ['八月', 70,80,88],
                 ['九月', 55,60,42],
                 ['十月', 70,58,62],
                 ['十一月', 58,56,62],
                 ['十二月', 50,66,60]
             ]
         },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle:{
                        color: '#3b4f96',
                        width:1//这里是为了突出显示加上的
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#38b3c8'
                    }
                }

            },
         yAxis: {
             min:0,
             max:100,
             splitNumber: 5,
             splitLine: {
                lineStyle: {
                    color:'#3b4f96'
                }
            },
            nameTextStyle: {
                color:'#3b4f96'
            },
            axisLine: {
                lineStyle: {
                    color: '#3b4f96',
                    width:1
                }
            },
            axisLabel:{
                textStyle: {
                    color: '#38b3c8'
                },
                formatter: function (val) {
                    return `${val.toFixed(1)}%`
                }
                
           }
         },
         // Declare several bar series, each will be mapped
         // to a column of dataset.source by default.
         series: [
             { type: 'bar' },
             { type: 'bar' },
             { type:'bar' }
         ]
        };
        companyType.setOption(option);
    };
    companytype();
    function risktype() {
        var riskType = echarts.init(document.getElementById('riskType'));
        let   option = {
            title: {
                text: ''
            },
            color:['#b8ba74','#67c0af','#5487c5'],
            tooltip: {
                trigger: 'item',
                textStyle: {
                    color:'#38b3c8'
                },
                // formatter:`{c}%`
            },
            legend: {
                data:['第一产业','第二产业','第三产业'],
                textStyle:{
                    color: "#fff",
                    opacity: 8,
                    borderRadius: "5px",
                    fontSize: " 14px",
                },
                right: 0
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['陈村', '均安', '杏园', '北浅', '乐从', '龙江'],
                axisLine: {
                    lineStyle:{
                        color: '#3b4f96',
                        width:1//这里是为了突出显示加上的
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#38b3c8'
                    }
                }
            },
        yAxis: {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        color:'#3b4f96'
                    }
                },
                nameTextStyle: {
                    color:'#3b4f96'
                },
                axisLine: {
                    lineStyle: {
                        color: '#3b4f96',
                        width:1
                    }
                },
                axisLabel:{
                    formatter: function (val) {
                        return val.toFixed(1)+'%';
                    },
                    textStyle: {
                        color: '#38b3c8'
                    }
                    
            },
            min: 0,
            max: 100,
            splitNumber: 5,
            scale: true,
            show: true,
            },
            series: [
                {
                    name:'第一产业',
                    type:'line',
                    data: [30, 79, 50, 32, 68, 51],
                    symbolSize: 8
                },
                {
                    name:'第二产业',
                    type:'line',
                    data: [80, 76, 72, 77, 28, 45],
                    symbolSize:8
                },
                {
                    name:'第三产业',
                    type:'line',
                    data: [20, 15, 10, 49, 25, 24],
                    symbolSize:8
                }
                
            ]
        };
        riskType.setOption(option);
    };
    risktype();
};