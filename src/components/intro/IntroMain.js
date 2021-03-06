import React from "react";

class IntroMain extends React.Component {
  render() {
    return (
      <div id="pg-intro">
        <div className="intro highlight">
          <p>
            AccDC Bootstrap is an HTML parser that renders advanced, accessible
            interactive controls using semantic HTML markup.
          </p>
        </div>
        <div className="intro tal">
          <p>AccDC Bootstrap Mirrors:</p>
          <ul>
            <li>
              <a href="http://whatsock.com/bootstrap/">
                Powered by AccDC Standalone
              </a>
            </li>
            <li>
              <a href="http://whatsock.com/bootstrap/jquery/">
                Powered by jQuery
              </a>
            </li>
            <li>
              <a href="http://whatsock.com/bootstrap/dojo/">Powered by Dojo</a>
            </li>
            <li>
              <a href="http://whatsock.com/bootstrap/mootools/">
                Powered by MooTools
              </a>
            </li>
          </ul>
          <p className="guidance">
            For specific coding guidance, view the{" "}
            <a href="http://whatsock.com/tsg">AccDC Technical Style Guide</a>
          </p>
        </div>
        <div className="hd">
          <h3>
            <span>What is bootstrapping?</span>
          </h3>
        </div>
        <div className="intro tal">
          <p>
            Bootstrapping refers to the use of semantic HTML markup to configure
            advanced controls, which are then magically converted into dynamic
            interactive components when the content finishes loading.
          </p>
          <p>
            This allows developers to include complex functionality that is
            fully configurable across thousands of web pages, without having to
            program individual components using JavaScript.
          </p>
          <p>Benefits:</p>
          <ul>
            <li>Easy implementation</li>
            <li>Consistent layouts</li>
            <li>Reliable functionality</li>
            <li>Full customization</li>
            <li>Automatic accessibility</li>
          </ul>
        </div>
        <div className="hd">
          <h3>
            <span>Why is AccDC Bootstrap different?</span>
          </h3>
        </div>
        <div className="intro tal">
          <p>
            AccDC Bootstrap is module based, so it can be extended or reduced as
            needed for any site-wide implementation.
          </p>
          <p>
            The style sheets for all bootstrap components are fully
            configurable, so they can be customized to fit the user interface
            design of any site while maintaining the same level of reliability
            and accessibility.
          </p>
          <p>
            The bootstrap module itself is also fully configurable, so that new
            features and components can easily be added and customized for
            global integration.
          </p>
          <p>Tested using:</p>
          <ol>
            <li>JAWS 12+ using IE 11 and Firefox.</li>
            <li>NVDA using IE11 and Firefox.</li>
            <li>Voiceover using iOS Safari.</li>
          </ol>
          <p>
            AccDC Bootstrap is designed to automatically enforce accessibility,
            while making it possible to populate individual components with any
            type of content, in any language, using any visual styling.
          </p>
          <p>
            Recursive processing is also supported, so that new content, when
            rendered, will automatically be bootstrapped; even when pulled from
            an external resource.
          </p>
          <p>
            Bootstrapping can also be manually invoked using the{" "}
            <code className="inline">$A.bootstrap</code> method for individual
            DOM nodes.
            <br />
            <code>$A.bootstrap(Container_DOM_Node);</code>
          </p>
        </div>
        <div className="hd">
          <h3>
            <span>Downloads</span>
          </h3>
        </div>
        <div className="intro tal downloads">
          <ul>
            <li>
              <strong>Browse All</strong>
              <a target="custom" href="https://github.com/whatsock/">
                WhatSock Projects on GitHub
              </a>
            </li>
            <li>
              <strong>The AccDC API (Standalone)</strong>[{" "}
              <a target="custom" href="https://github.com/whatsock/accdc">
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/accdc/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>The AccDC API (for jQuery)</strong>[{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/accdc-jquery"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/accdc-jquery/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>The AccDC API (for Dojo)</strong>[{" "}
              <a target="custom" href="https://github.com/whatsock/accdc-dojo">
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/accdc-dojo/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>The AccDC API (for MooTools)</strong>[{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/accdc-mootools"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/accdc-mootools/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>AccDC Bootstrap (Standalone)</strong>[{" "}
              <a target="custom" href="https://github.com/whatsock/bootstrap">
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>AccDC Bootstrap (for jQuery)</strong>[{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-jquery"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-jquery/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>AccDC Bootstrap (for Dojo)</strong>[{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-dojo"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-dojo/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>AccDC Bootstrap (for MooTools)</strong>[{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-mootools"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/bootstrap-mootools/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>
                The AccDC Technical Style Guide and Coding Arena (for AccDC
                Standalone and jQuery)
              </strong>
              [{" "}
              <a target="custom" href="https://github.com/whatsock/tsg">
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/tsg/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>
                The AccDC Technical Style Guide and Coding Arena (for Dojo)
              </strong>
              [{" "}
              <a target="custom" href="https://github.com/whatsock/tsg-dojo">
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/tsg-dojo/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
            <li>
              <strong>
                The AccDC Technical Style Guide and Coding Arena (for MooTools)
              </strong>
              [{" "}
              <a
                target="custom"
                href="https://github.com/whatsock/tsg-mootools"
              >
                GitHub
              </a>{" "}
              |
              <a
                target="custom"
                href="https://github.com/whatsock/tsg-mootools/archive/master.zip"
              >
                Zip
              </a>{" "}
              ]
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default IntroMain;
