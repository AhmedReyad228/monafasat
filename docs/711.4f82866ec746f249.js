"use strict";(self.webpackChunkmonafasaat=self.webpackChunkmonafasaat||[]).push([[711],{2333:(Ce,q,l)=>{l.d(q,{e:()=>W});var r=l(4946),S=l(9862);let W=(()=>{class _{constructor(f){this._HttpClient=f,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}getRegister(f){return this._HttpClient.post(this.baseUrl+"signup",f)}getLogin(f){return this._HttpClient.post(this.baseUrl+"signin",f)}static#t=this.\u0275fac=function($){return new($||_)(r.LFG(S.eN))};static#e=this.\u0275prov=r.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},95:(Ce,q,l)=>{l.d(q,{Fj:()=>N,qu:()=>An,NI:()=>M,u:()=>ut,cw:()=>A,sg:()=>L,JJ:()=>Ht,JL:()=>Ut,UX:()=>Dn,kI:()=>Ge,_Y:()=>te});var r=l(4946),S=l(6814),W=l(7715),_=l(5592),Ve=l(7453),f=l(4829),$=l(4564),Ae=l(8251),De=l(7400),Me=l(2714),Ee=l(7398);let pt=(()=>{class e{constructor(t,i){this._renderer=t,this._elementRef=i,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq))};static#e=this.\u0275dir=r.lG2({type:e})}return e})(),y=(()=>{class e extends pt{static#t=this.\u0275fac=function(){let t;return function(o){return(t||(t=r.n5z(e)))(o||e)}}();static#e=this.\u0275dir=r.lG2({type:e,features:[r.qOj]})}return e})();const h=new r.OlP("NgValueAccessor"),we={provide:h,useExisting:(0,r.Gpc)(()=>N),multi:!0},Se=new r.OlP("CompositionEventMode");let N=(()=>{class e extends pt{constructor(t,i,o){super(t,i),this._compositionMode=o,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const e=(0,S.q)()?(0,S.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(t){this.setProperty("value",t??"")}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(r.Qsj),r.Y36(r.SBq),r.Y36(Se,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){1&i&&r.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[r._Bn([we]),r.qOj]})}return e})();function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function mt(e){return null!=e&&"number"==typeof e.length}const u=new r.OlP("NgValidators"),g=new r.OlP("NgAsyncValidators"),Ne=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ge{static min(n){return function _t(e){return n=>{if(p(n.value)||p(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}(n)}static max(n){return function yt(e){return n=>{if(p(n.value)||p(e))return null;const t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}(n)}static required(n){return function vt(e){return p(e.value)?{required:!0}:null}(n)}static requiredTrue(n){return function Ct(e){return!0===e.value?null:{required:!0}}(n)}static email(n){return function Vt(e){return p(e.value)||Ne.test(e.value)?null:{email:!0}}(n)}static minLength(n){return function At(e){return n=>p(n.value)||!mt(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static maxLength(n){return function Dt(e){return n=>mt(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}(n)}static pattern(n){return function Mt(e){if(!e)return G;let n,t;return"string"==typeof e?(t="","^"!==e.charAt(0)&&(t+="^"),t+=e,"$"!==e.charAt(e.length-1)&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(p(i.value))return null;const o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}(n)}static nullValidator(n){return null}static compose(n){return St(n)}static composeAsync(n){return Nt(n)}}function G(e){return null}function bt(e){return null!=e}function Et(e){return(0,r.QGY)(e)?(0,W.D)(e):e}function Ft(e){let n={};return e.forEach(t=>{n=null!=t?{...n,...t}:n}),0===Object.keys(n).length?null:n}function wt(e,n){return n.map(t=>t(e))}function Ot(e){return e.map(n=>function xe(e){return!e.validate}(n)?n:t=>n.validate(t))}function St(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return Ft(wt(t,n))}}function z(e){return null!=e?St(Ot(e)):null}function Nt(e){if(!e)return null;const n=e.filter(bt);return 0==n.length?null:function(t){return function be(...e){const n=(0,$.jO)(e),{args:t,keys:i}=(0,Ve.D)(e),o=new _.y(s=>{const{length:a}=t;if(!a)return void s.complete();const c=new Array(a);let C=a,b=a;for(let Y=0;Y<a;Y++){let ft=!1;(0,f.Xf)(t[Y]).subscribe((0,Ae.x)(s,Mn=>{ft||(ft=!0,b--),c[Y]=Mn},()=>C--,void 0,()=>{(!C||!ft)&&(b||s.next(i?(0,Me.n)(i,c):c),s.complete())}))}});return n?o.pipe((0,De.Z)(n)):o}(wt(t,n).map(Et)).pipe((0,Ee.U)(Ft))}}function J(e){return null!=e?Nt(Ot(e)):null}function Gt(e,n){return null===e?[n]:Array.isArray(e)?[...e,n]:[e,n]}function xt(e){return e._rawValidators}function Bt(e){return e._rawAsyncValidators}function Z(e){return e?Array.isArray(e)?e:[e]:[]}function x(e,n){return Array.isArray(e)?e.includes(n):e===n}function It(e,n){const t=Z(n);return Z(e).forEach(o=>{x(t,o)||t.push(o)}),t}function Pt(e,n){return Z(n).filter(t=>!x(e,t))}class kt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=z(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=J(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return!!this.control&&this.control.hasError(n,t)}getError(n,t){return this.control?this.control.getError(n,t):null}}class d extends kt{get formDirective(){return null}get path(){return null}}class m extends kt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Tt{constructor(n){this._cd=n}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Ht=(()=>{class e extends Tt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(m,2))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[r.qOj]})}return e})(),Ut=(()=>{class e extends Tt{constructor(t){super(t)}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,10))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){2&i&&r.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[r.qOj]})}return e})();const E="VALID",I="INVALID",V="PENDING",F="DISABLED";function K(e){return(P(e)?e.validators:e)||null}function tt(e,n){return(P(n)?n.asyncValidators:e)||null}function P(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}function Rt(e,n,t){const i=e.controls;if(!(n?Object.keys(i):i).length)throw new r.vHH(1e3,"");if(!i[t])throw new r.vHH(1001,"")}function Lt(e,n,t){e._forEachChild((i,o)=>{if(void 0===t[o])throw new r.vHH(1002,"")})}class k{constructor(n,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===I}get pending(){return this.status==V}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(It(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(It(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Pt(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Pt(n,this._rawAsyncValidators))}hasValidator(n){return x(this._rawValidators,n)}hasAsyncValidator(n){return x(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){this.touched=!0,this._parent&&!n.onlySelf&&this._parent.markAsTouched(n)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(n=>n.markAllAsTouched())}markAsUntouched(n={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}markAsDirty(n={}){this.pristine=!1,this._parent&&!n.onlySelf&&this._parent.markAsDirty(n)}markAsPristine(n={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}markAsPending(n={}){this.status=V,!1!==n.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!n.onlySelf&&this._parent.markAsPending(n)}disable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=F,this.errors=null,this._forEachChild(i=>{i.disable({...n,onlySelf:!0})}),this._updateValue(),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!0))}enable(n={}){const t=this._parentMarkedDirty(n.onlySelf);this.status=E,this._forEachChild(i=>{i.enable({...n,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors({...n,skipPristineCheck:t}),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===V)&&this._runAsyncValidator(n.emitEvent)),!1!==n.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(n)}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;const t=Et(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:n})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(!1!==t.emitEvent)}get(n){let t=n;return null==t||(Array.isArray(t)||(t=t.split(".")),0===t.length)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){const i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(n)}_initObservables(){this.valueChanges=new r.vpe,this.statusChanges=new r.vpe}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(I)?I:E}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n={}){this.pristine=!this._anyControlsDirty(),this._parent&&!n.onlySelf&&this._parent._updatePristine(n)}_updateTouched(n={}){this.touched=this._anyControlsTouched(),this._parent&&!n.onlySelf&&this._parent._updateTouched(n)}_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){P(n)&&null!=n.updateOn&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=function ke(e){return Array.isArray(e)?z(e):e||null}(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=function Te(e){return Array.isArray(e)?J(e):e||null}(this._rawAsyncValidators)}}class A extends k{constructor(n,t,i){super(K(t),tt(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){Lt(this,0,n),Object.keys(n).forEach(i=>{Rt(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(Object.keys(n).forEach(i=>{const o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>!!i._syncPendingControls()||t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{const i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(const[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){return this._reduceChildren({},(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,s)=>{i=t(i,o,s)}),i}_allControlsDisabled(){for(const n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}}class Yt extends A{}const D=new r.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>T}),T="always";function w(e,n,t=T){et(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||"always"===t)&&n.valueAccessor.setDisabledState?.(e.disabled),function Ue(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&qt(e,n)})}(e,n),function Re(e,n){const t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}(e,n),function je(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&qt(e,n),"submit"!==e.updateOn&&e.markAsTouched()})}(e,n),function He(e,n){if(n.valueAccessor.setDisabledState){const t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}(e,n)}function U(e,n,t=!0){const i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),R(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function j(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function et(e,n){const t=xt(e);null!==n.validator?e.setValidators(Gt(t,n.validator)):"function"==typeof t&&e.setValidators([t]);const i=Bt(e);null!==n.asyncValidator?e.setAsyncValidators(Gt(i,n.asyncValidator)):"function"==typeof i&&e.setAsyncValidators([i]);const o=()=>e.updateValueAndValidity();j(n._rawValidators,o),j(n._rawAsyncValidators,o)}function R(e,n){let t=!1;if(null!==e){if(null!==n.validator){const o=xt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.validator);s.length!==o.length&&(t=!0,e.setValidators(s))}}if(null!==n.asyncValidator){const o=Bt(e);if(Array.isArray(o)&&o.length>0){const s=o.filter(a=>a!==n.asyncValidator);s.length!==o.length&&(t=!0,e.setAsyncValidators(s))}}}const i=()=>{};return j(n._rawValidators,i),j(n._rawAsyncValidators,i),t}function qt(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function zt(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}function Jt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const M=class extends k{constructor(n=null,t,i){super(K(t),tt(i,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),P(t)&&(t.nonNullable||t.initialValueIsDefault)&&(this.defaultValue=Jt(n)?n.value:n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&!1!==t.emitModelToViewChange&&this._onChange.forEach(i=>i(this.value,!1!==t.emitViewToModelChange)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){zt(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){zt(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(n){Jt(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};let te=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}return e})(),ne=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({})}return e})();const st=new r.OlP("NgModelWithFormControlWarning"),nn={provide:d,useExisting:(0,r.Gpc)(()=>L)};let L=(()=>{class e extends d{constructor(t,i,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.vpe,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(R(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const i=this.form.get(t.path);return w(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){U(t.control||null,t,!1),function We(e,n){const t=e.indexOf(n);t>-1&&e.splice(t,1)}(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this.submitted=!0,function $t(e,n){e._syncPendingControls(),n.forEach(t=>{const i=t.control;"submit"===i.updateOn&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(t),"dialog"===t?.target?.method}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const i=t.control,o=this.form.get(t.path);i!==o&&(U(i||null,t),(e=>e instanceof M)(o)&&(w(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const i=this.form.get(t.path);(function Wt(e,n){et(e,n)})(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const i=this.form.get(t.path);i&&function Le(e,n){return R(e,n)}(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){et(this.form,this),this._oldForm&&R(this._oldForm,this)}_checkFormPresent(){}static#t=this.\u0275fac=function(i){return new(i||e)(r.Y36(u,10),r.Y36(g,10),r.Y36(D,8))};static#e=this.\u0275dir=r.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){1&i&&r.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r._Bn([nn]),r.qOj,r.TTD]})}return e})();const sn={provide:m,useExisting:(0,r.Gpc)(()=>ut)};let ut=(()=>{class e extends m{set isDisabled(t){}static#t=this._ngModelWarningSentOnce=!1;constructor(t,i,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new r.vpe,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=function rt(e,n){if(!n)return null;let t,i,o;return Array.isArray(n),n.forEach(s=>{s.constructor===N?t=s:function qe(e){return Object.getPrototypeOf(e.constructor)===y}(s)?i=s:o=s}),o||i||t||null}(0,s)}ngOnChanges(t){this._added||this._setUpControl(),function it(e,n){if(!e.hasOwnProperty("model"))return!1;const t=e.model;return!!t.isFirstChange()||!Object.is(n,t.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return function H(e,n){return[...n.path,e]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static#e=this.\u0275fac=function(i){return new(i||e)(r.Y36(d,13),r.Y36(u,10),r.Y36(g,10),r.Y36(h,10),r.Y36(st,8))};static#n=this.\u0275dir=r.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r._Bn([sn]),r.qOj,r.TTD]})}return e})(),Vn=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[ne]})}return e})();class ye extends k{constructor(n,t,i){super(K(t),tt(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){Lt(this,0,n),n.forEach((i,o)=>{Rt(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){null!=n&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t),this._updateTouched(t),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>!!i._syncPendingControls()||t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(const n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}}function ve(e){return!!e&&(void 0!==e.asyncValidators||void 0!==e.validators||void 0!==e.updateOn)}let An=(()=>{class e{constructor(){this.useNonNullable=!1}get nonNullable(){const t=new e;return t.useNonNullable=!0,t}group(t,i=null){const o=this._reduceControls(t);let s={};return ve(i)?s=i:null!==i&&(s.validators=i.validator,s.asyncValidators=i.asyncValidator),new A(o,s)}record(t,i=null){const o=this._reduceControls(t);return new Yt(o,i)}control(t,i,o){let s={};return this.useNonNullable?(ve(i)?s=i:(s.validators=i,s.asyncValidators=o),new M(t,{...s,nonNullable:!0})):new M(t,i,o)}array(t,i,o){const s=t.map(a=>this._createControl(a));return new ye(s,i,o)}_reduceControls(t){const i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){return t instanceof M||t instanceof k?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Dn=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:st,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:D,useValue:t.callSetDisabledState??T}]}}static#t=this.\u0275fac=function(i){return new(i||e)};static#e=this.\u0275mod=r.oAB({type:e});static#n=this.\u0275inj=r.cJS({imports:[Vn]})}return e})()}}]);