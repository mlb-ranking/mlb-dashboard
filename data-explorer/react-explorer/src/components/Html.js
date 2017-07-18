/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';
import config from '../config';

/* eslint-disable react/no-danger */

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        cssText: PropTypes.string.isRequired,
      }).isRequired,
    ),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    app: PropTypes.object, // eslint-disable-line
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
  };

  render() {
    const { title, description, styles, scripts, app, children } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>
            {title}
          </title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {scripts.map(script =>
            <link key={script} rel="preload" href={script} as="script" />,
          )}
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {styles.map(style =>
            <style
              key={style.id}
              id={style.id}
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )}

          <link href="/material/css/bootstrap.min.css" rel="stylesheet" />
          <link href="/material/font-awesome/css/font-awesome.css" rel="stylesheet" />
          <link href="/material/css/animate.css" rel="stylesheet" />
          <link href="/material/css/style.css" rel="stylesheet" />
          <link href="/material/css/plugins/dataTables/datatables.min.css" rel="stylesheet" />



          <script src="/material/js/jquery-3.1.1.min.js"></script>
          <script src="/material/js/bootstrap.min.js"></script>
          <script src="/material/js/plugins/metisMenu/jquery.metisMenu.js"></script>
          <script src="/material/js/plugins/slimscroll/jquery.slimscroll.min.js"></script>

          {/*<!-- Flot -->*/}
          <script src="/material/js/plugins/flot/jquery.flot.js"></script>
          <script src="/material/js/plugins/flot/jquery.flot.tooltip.min.js"></script>
          <script src="/material/js/plugins/flot/jquery.flot.spline.js"></script>
          <script src="/material/js/plugins/flot/jquery.flot.resize.js"></script>
          <script src="/material/js/plugins/flot/jquery.flot.pie.js"></script>

          {/*<!-- Peity -->*/}
          <script src="/material/js/plugins/peity/jquery.peity.min.js"></script>
          <script src="/material/js/demo/peity-demo.js"></script>

          {/*<!-- Custom and plugin javascript -->*/}
          <script src="/material/js/inspinia.js"></script>
          <script src="/material/js/plugins/pace/pace.min.js"></script>

          {/*<!-- jQuery UI -->*/}
          <script src="/material/js/plugins/jquery-ui/jquery-ui.min.js"></script>

          {/*<!-- GITTER -->*/}
          <script src="/material/js/plugins/gritter/jquery.gritter.min.js"></script>

          {/*<!-- Sparkline -->*/}
          <script src="/material/js/plugins/sparkline/jquery.sparkline.min.js"></script>

          {/*<!-- Sparkline demo data  -->*/}
          <script src="/material/js/demo/sparkline-demo.js"></script>

          {/*<!-- ChartJS-->*/}
          <script src="/material/js/plugins/chartJs/Chart.min.js"></script>

          {/*<!-- Toastr -->*/}
          <script src="/material/js/plugins/toastr/toastr.min.js"></script>

          {/*Data Tables*/}
          <script src="/material/js/plugins/dataTables/datatables.min.js"></script>


        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          <script
            dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
          />
          {scripts.map(script => <script key={script} src={script} />)}
          {config.analytics.googleTrackingId &&
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${config.analytics
                    .googleTrackingId}','auto');ga('send','pageview')`,
              }}
            />}
          {config.analytics.googleTrackingId &&
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />}
        </body>
      </html>
    );
  }
}

export default Html;
