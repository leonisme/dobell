
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
    var INTERVAL = 2500;
    var SlideAnimate = React.createClass({
        getInitialState: function () {
            return {
                current: 0,
                page: "a"
            };
        },
        componentDidMount: function () {
            this.interval = setInterval(this.tick, INTERVAL);
            this.flag = setInterval(this.listener, 20);
        },
        componentWillUnmount: function () {
            clearInterval(this.interval);
            clearInterval(this.listener);
        },
        run: function () {
            this.interval = setInterval(this.tick, INTERVAL);
        },
        stop: function () {
            clearInterval(this.interval);
        },
        tick: function () {
            this.setState({current: this.state.current + 1});
        },
        listener: function () {
            if (pageNumber != this.state.page) {
                this.setState({page: pageNumber});
            }
        },
        render: function () {
            var i = this.state.current;
            var index = i % 4 + 1;
            var pageIndex = this.state.page;
            var src = "images/" + pageIndex + index + ".png";
            var slideAnimate = <CSSTransitionGroup
                    className="animateFrame"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    transitionName="slide"
                    onMouseEnter={this.stop}
                    onMouseLeave={this.run}><img className="image" key={i} src={src} height="399"
                                                 width="226"></img></CSSTransitionGroup>;
            if(this.state.page=="f"){
                slideAnimate="";
            }
            return (<CSSTransitionGroup
                className="pageFrame"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionName="page">
                <div className="pageChange" key={pageIndex}>{slideAnimate}</div>
            </CSSTransitionGroup>)
        }
    })
    ReactDOM.render(
        <SlideAnimate />,
        document.getElementById('container')
    );
