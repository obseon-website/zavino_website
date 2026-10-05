"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, ArrowsClockwise, Check, CheckCircle, Circle, Desktop, GearSix, LockKey, SquaresFour, Stack, User, Users, WarningCircle, DeviceMobile } from "@phosphor-icons/react";

export function ProductDemo() {
  const [view, setView] = useState("customer");
  const [access, setAccess] = useState<"none" | "requested" | "granted">("none");
  const [connected, setConnected] = useState(true);
  return <div className="product-demo">
    <div className="demo-caption"><span>Zavino Lab <span aria-hidden="true">·</span> Interactive product concept</span><span>Try each role <ArrowRight size={15} /></span></div>
    <div className="product-window">
      <div className="product-window-top"><span className="product-mark"><Stack size={24} weight="duotone" /> relay<span className="product-mark-caption">Client workspace</span></span><span className="demo-only">CONCEPT</span></div>
      <div className="product-roles" role="group" aria-label="Product role">
        {[{key:"customer",name:"Customer",Icon:User},{key:"admin",name:"Admin",Icon:Users},{key:"operations",name:"Operations",Icon:GearSix}].map(({key,name,Icon})=><button key={key} type="button" aria-pressed={view===key} onClick={()=>setView(key)}><Icon size={16}/>{name}</button>)}
      </div>
      <div className="product-content">
        {view === "customer" && <>
          <div className="product-content-heading"><div><span className="product-breadcrumb">Workspace / Getting started</span><h3>A clear path to your first project.</h3></div><SquaresFour size={31} weight="thin" /></div>
          <p>Everything you need to join the workspace, with the right access from the start.</p>
          <div className="product-task"><CheckCircle size={20} weight="fill"/><span><strong>Workspace created</strong><small>Your project has a place to live.</small></span><span className="task-state">Ready</span></div>
          <div className="product-task"><LockKey size={20}/><span><strong>Project access</strong><small>{access==="granted"?"An admin approved your request.":access==="requested"?"Your request is in the admin review queue.":"Ask an admin for permission to continue."}</small></span><span className="task-state">{access==="granted"?"Granted":access==="requested"?"In review":"Required"}</span></div>
          <button className="product-action" disabled={access!=="none"} type="button" onClick={()=>setAccess("requested")}>{access==="granted"?"Workspace access enabled":access==="requested"?"Request sent to admin view":"Request project access"}{access==="granted"?<Check size={16}/>:<ArrowRight size={16}/>}</button>
          {access==="requested" && <button className="product-helper" type="button" onClick={()=>setView("admin")}>Switch to Admin to review the request <ArrowUpRight size={14}/></button>}
        </>}
        {view === "admin" && <>
          <div className="product-content-heading"><div><span className="product-breadcrumb">Workspace / Access control</span><h3>The right access.<br/>A human decision.</h3></div><LockKey size={31} weight="thin"/></div>
          <p>Admins can review membership. Customers can only see their own project.</p>
          <div className="product-review"><span className="review-icon"><User size={23}/></span><div><strong>Demo workspace member</strong><p>{access==="requested"?"Requests access to the project workspace.":access==="granted"?"Project access is active.":"No access requests to review."}</p></div><span className="task-state">{access==="requested"?"Pending":access==="granted"?"Approved":"No request"}</span></div>
          {access==="requested" ? <button type="button" className="product-action" onClick={()=>setAccess("granted")}>Grant project access <Check size={16}/></button> : <button type="button" className="product-helper" onClick={()=>{if(access==="granted")setAccess("none");setView("customer");}}>{access==="granted"?"Reset demo and return to Customer":"Open Customer to request access"}<ArrowRight size={16}/></button>}
          <div className="product-boundary"><LockKey size={14}/> Access changes are limited to this concept.</div>
        </>}
        {view === "operations" && <>
          <div className="product-content-heading"><div><span className="product-breadcrumb">Workspace / Integration health</span><h3>Build for the moments things don’t go to plan.</h3></div><GearSix size={31} weight="thin"/></div>
          <p>Keep failed work visible, preserve its context, and give the team a recovery path.</p>
          <div role="status" className={`integration-state${connected?"":" has-issue"}`}>{connected?<CheckCircle size={23}/>:<WarningCircle size={23}/>}<div><strong>{connected?"CRM connection ready":"Connection interrupted"}</strong><p>{connected?"Illustrative connection. No external system is connected.":"The event is held safely. Retry the example to resume."}</p></div></div>
          <button type="button" className="product-action" onClick={()=>setConnected(!connected)}>{connected?"Simulate an interruption":"Retry connection"}<ArrowsClockwise size={16}/></button>
        </>}
      </div>
      <div className="product-status" aria-live="polite"><span><LockKey size={13}/> {view === "customer" ? "Customer permissions" : view === "admin" ? "Admin permissions" : "Operations permissions"}</span><span>{access === "granted" ? "Access approved" : access === "requested" ? "Access awaiting approval" : "Example workspace"}</span></div>
    </div>
  </div>;
}

export function WebDemo() {
  const [mobile, setMobile] = useState(false);
  const [complete, setComplete] = useState(false);
  return <div className="web-demo">
    <div className="demo-caption"><span>Zavino Lab <span aria-hidden="true">·</span> Responsive portal concept</span><div className="device-controls" role="group" aria-label="Preview device"><button type="button" aria-label="Desktop preview" aria-pressed={!mobile} onClick={()=>setMobile(false)}><Desktop size={20}/></button><button type="button" aria-label="Mobile preview" aria-pressed={mobile} onClick={()=>setMobile(true)}><DeviceMobile size={20}/></button></div></div>
    <div className={`web-preview${mobile?" web-preview-mobile":""}`}>
      <div className="web-preview-bar"><span><span className="browser-dot"/><span className="browser-dot"/><span className="browser-dot"/></span><span>Workspace portal</span><LockKey size={13}/></div>
      <div className="web-preview-body"><nav aria-label="Concept portal"><strong>fieldwork<span>.</span></strong><span>Project workspace</span></nav><div className="web-preview-main"><div><span className="product-breadcrumb">A place for the work.</span><h3>Less back and forth.<br/>More moving forward.</h3><p>One shared home for project updates, files and decisions.</p></div><div className="web-mini-task"><span className="web-task-label">DESIGN REVIEW</span><strong>Your first look is ready.</strong><p>{complete?"Review acknowledged. The team can see your decision.":"Review the direction and let the team know you're ready."}</p><button type="button" onClick={()=>setComplete(!complete)}>{complete?<Check size={16}/>:<Circle size={16}/>} {complete?"Reviewed. Reset example":"Mark as reviewed"}</button></div></div></div>
    </div>
    <p className="web-demo-note">The same working interface, adapted to the space it has.</p>
  </div>;
}
