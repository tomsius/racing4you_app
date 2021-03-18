import React, { Component } from 'react';
import { DataRangeForm } from '../../DataRangeForm';
import CanvasJSReact from '../../../canvasjs.react';
import { Button } from 'react-bootstrap';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class Winners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            winners: [],
            isBarChart: true,
            isVisible: false
        };

        this.fillData = this.fillData.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.calculateTotalWins = this.calculateTotalWins.bind(this);
    }

    fillData(data) {
        this.setState({
            winners: data
        });
    }

    handleClick() {
        var newChart = !this.state.isBarChart;

        this.setState({
            isBarChart: newChart
        });
    }

    calculateTotalWins(winners) {
        var totalWins = 0;

        winners.forEach(winner => {
            totalWins += winner.winCount
        });
        
        return totalWins;
    }

    render() {
        var options;
        if (this.state.winners.length > 0) {
            var totalWins = this.calculateTotalWins(this.state.winners);
            var data = this.state.winners.map(x => ({ label: x.name, y: x.winCount, percentage: Math.round((x.winCount / totalWins * 100) * 100) / 100 }));

            if (this.state.isBarChart) {
                options = {
                    title: {
                        text: this.props.pageTitle
                    },
                    data: [
                        {
                            type: "column",
                            dataPoints: data
                        }
                    ],
                    axisX: {
                        title: this.props.axisName,
                        labelAngle: 30,
                        interval: 1
                    },
                    axisY: {
                        title: "Laimėjimų skaičius, vnt."
                    },
                    toolTip:{   
                        content: "{label}: {y}"      
                    }
                };
            }
            else {
                options = {
                    title: {
                        text: this.props.pageTitle
                    },
                    data: [
                        {
                            type: "pie",
                            indexLabel: "{label} {y}",
                            dataPoints: data
                        }
                    ],
                    toolTip:{   
                        content: "{label}: {percentage}%"      
                    }
                };
            }
        }

        return (
            <div>
                <h2>{this.props.pageTitle}</h2>
                <br />
                <DataRangeForm api={this.props.api} callback={this.fillData} />
                <br />
                {
                    this.state.winners.length > 0 &&
                    <div>
                        <Button variant="primary" onClick={this.handleClick} disabled={this.state.isVisible}>
                            {this.state.isBarChart ? "Rodyti skritulinę diagramą" : "Rodyti stulpelinę diagramą"}
                        </Button>
                        <br />
                        <br />
                        <div style={{ position: "relative", right: "6em" }}>
                            <CanvasJSChart options={options} />
                        </div>
                    </div>
                }
            </div>
        );
    }
}