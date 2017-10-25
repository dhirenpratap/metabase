import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoImg extends Component {
    static defaultProps = {
        size: 32
    };

    static propTypes = {
        size: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        dark: PropTypes.bool
    };

    render() {
        let { dark, height, width, size } = this.props;
        return (
            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAAHeTXxYAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAC4jAAAuIwF4pT92AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAADOElEQVRIDaWWS0hUURjHxxdRFlSKYi9aaA8KCqMsKcoKWroJemzKRVEQBRFmEEGbkIyISoiIFlFGES6ENlGQZWDWImnRa2FCD0TKHgol6u33P55zPDNzhyb64Dff63++O3fuuUcTCWtRFBW72HuKu3P5qPSVRKLQxBR3wl7fIDnlOpECCiO5+D5TTSTmGk/1qy0YyUMKssFxFzWpmU/SiO/PwbyagPpZk1v1etdU7mInqKF2whXNmEAl9Sgc0UzZPqeUJ/9iGmHRNiLdVKypUaVZrkv4hPigyzWyFd74QhjQOABx1kNxRajVpGOB8kLYpL4Ahmy/AV+pBZts4WcoTo3RrLK6et3QRiu4kSoMcx5Tl83nGM+EX3bK0lAYxvTfwygU+TrJLgitg+RTUNjmxElbQ0VEU3F1sATu8bVa8fGGOAe6g8kuHCZoTltFsdQprB/Du52r0gu4Cvl+MYlEMv0g+lreyM+ogekeL5kGwVFVsDGvTAno7TGKKDqJL9aNu6e9LkWblKLT1/0Ak7TIWJIiJkF0xUqnZdz7MesGbC1PV/psJ8yLEfoSmj74CPlaVAuyXq9ICehVGEUUnfMtCm67PPdFG9Crtgv68eNnmRNReGmbcvrKj4P8KfHEg3WL5GnMgkZ4DbKLsDjUKE7bsKGABfPJt8BmqIYyCNfoF30GnXAfutjgv/FpFi4yTYbrHTsP2yGbx6hTbBD6QRcdgnYueA3vzV+IC+jVuw61vjsR9BDqKOyGV6Dhi2A5rIFycPaWoAVKQHfawkV1VJvfuZwL9UJoAyQ7jCCLD7RbQftMppfzNhyG/VCoh1kE7RDarSxmx0oYctMO0lH3AKqMkCD1vNf2i99isaOTi6zNA3eg6VdpAvPOLkuWJu7ym46k1LJO7fO4YxdMx4sC7aoOW3RurQv+w2+wa7XVtQuH9YwKQEdtaMet8J8dQ+rBndR6iWv8EJIp0AahdZLM9qK/BGjL4FEwQM+pBvwr5EdQrAP3B5TQ2Hc+L8NqmAGTLTPx+rejGb6Bsx8EDVDqB2cKEJXAIeiCbOwdotOQ/j+jvUj6bWW4OkN0NK2EClgIOtva2GUZ/wDS9/YHPZPEt4JBxCYAAAAASUVORK5CYII="
                height="32"
                width="32"
                alt="Finflux Analytics"
            />
        );
    }
}
