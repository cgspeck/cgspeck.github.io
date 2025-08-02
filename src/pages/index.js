import React from "react"

import Layout from "../components/layout"

import ExternalLink from "../components/externalLink"

export default function Home() {
  return (
    <Layout slug="/" title="Chris Speck">
      <h2>Hello!</h2>
      <p>
        My name is Chris, I am a software engineer and a man of many hobbies
        living in Melbourne, Australia.
      </p>
      <p>You may be interested in the following tools I've published:</p>
      <ul>
        <li>
          A Windows tool written in Python/TkInter helps you create templates
          for the Behringer X-Touch Mini and Microsoft Flight Simulator
          <br />- my tool:{" "}
          <ExternalLink url="https://github.com/cgspeck/X-Touch-Mini-FS2020-TemplateMaker/tree/main">
            X-Touch-Mini-FS2020-TemplateMaker
          </ExternalLink>
          <br />- my templates for FBW{" "}
          <ExternalLink url="https://flybywiresim.com/">A20N</ExternalLink> &
          PMDG{" "}
          <ExternalLink url="https://pmdg.com/pmdg-737-800-for-microsoft-flight-simulator-2020/">
            738
          </ExternalLink>
          :{" "}
          <ExternalLink url="https://github.com/cgspeck/x-touch-fs2020-configs">
            x-touch-fs2020-configs
          </ExternalLink>
        </li>
        <li>
          Some Linux command line tools written in <ExternalLink url="https://www.rust-lang.org/">Rust</ExternalLink>:
          <br /> -{" "}
          <ExternalLink url="https://github.com/cgspeck/yapc">
            Yet Another Pushover Client
          </ExternalLink>
          : send messages and hook into shell to report status of long-running
          commands
          <br /> - <ExternalLink url="https://github.com/cgspeck/wakenrun">Wake-N-Run</ExternalLink>: Wake-On-Lan tool to wake up remote machines, run commands on them via ssh and shut them down when finished
          <br /> - <ExternalLink url="https://github.com/cgspeck/gen-systemd-svcs">Generate Systemd Services</ExternalLink>: generate many systemd service files given easy to use yaml template
        </li>
        <li>
          Photographers'{" "}
          <ExternalLink url="https://matcalculator.chrisspeck.com/">
            Mat Board Calculator
          </ExternalLink>{" "}
          web app
        </li>
        <li>
          Homebrewers'{" "}
          <ExternalLink url="https://hopscalculator.chrisspeck.com/">
            Hop Aging Calculator
          </ExternalLink>{" "}
          web app
        </li>
        <li>
          Multi-computer Linux/Windows{" "}
          <ExternalLink url="https://github.com/cgspeck/fg-orchestrator">
            launcher for FlighGear
          </ExternalLink>{" "}
          written in Python with QT
        </li>
        <li>
          A 3d printable{" "}
          <ExternalLink url="https://github.com/cgspeck/etw">
            elevator trimtab
          </ExternalLink>{" "}
          or{" "}
          <ExternalLink url="https://www.thingiverse.com/thing:3021944">
            parametric cat food lid
          </ExternalLink>
        </li>
      </ul>
      <p>If you wish to contact me, my email address is cgspeck at gmail.com</p>
      <p>You can also find me:</p>
      <ul>
        <li>
          on{" "}
          <ExternalLink url="https://github.com/cgspeck">Github</ExternalLink>
        </li>
        <li>
          on{" "}
          <ExternalLink url="https://www.linkedin.com/in/cgspeck/">
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          on{" "}
          <ExternalLink url="https://www.thingiverse.com/specky/designs">
            Thingiverse
          </ExternalLink>
        </li>
      </ul>

      <p>
        Sometimes I add pages to this site and you may find the links to these
        above.
      </p>
    </Layout>
  )
}
