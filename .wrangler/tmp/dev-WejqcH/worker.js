var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs
// @__NO_SIDE_EFFECTS__
function createNotImplementedError(name) {
  return new Error(`[unenv] ${name} is not implemented yet!`);
}
// @__NO_SIDE_EFFECTS__
function notImplemented(name) {
  const fn = /* @__PURE__ */ __name(() => {
    throw /* @__PURE__ */ createNotImplementedError(name);
  }, "fn");
  return Object.assign(fn, { __unenv__: true });
}
// @__NO_SIDE_EFFECTS__
function notImplementedClass(name) {
  return class {
    __unenv__ = true;
    constructor() {
      throw new Error(`[unenv] ${name} is not implemented yet!`);
    }
  };
}
var init_utils = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/_internal/utils.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    __name(createNotImplementedError, "createNotImplementedError");
    __name(notImplemented, "notImplemented");
    __name(notImplementedClass, "notImplementedClass");
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs
var _timeOrigin, _performanceNow, nodeTiming, PerformanceEntry, PerformanceMark, PerformanceMeasure, PerformanceResourceTiming, PerformanceObserverEntryList, Performance, PerformanceObserver, performance;
var init_performance = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/perf_hooks/performance.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_utils();
    _timeOrigin = globalThis.performance?.timeOrigin ?? Date.now();
    _performanceNow = globalThis.performance?.now ? globalThis.performance.now.bind(globalThis.performance) : () => Date.now() - _timeOrigin;
    nodeTiming = {
      name: "node",
      entryType: "node",
      startTime: 0,
      duration: 0,
      nodeStart: 0,
      v8Start: 0,
      bootstrapComplete: 0,
      environment: 0,
      loopStart: 0,
      loopExit: 0,
      idleTime: 0,
      uvMetricsInfo: {
        loopCount: 0,
        events: 0,
        eventsWaiting: 0
      },
      detail: void 0,
      toJSON() {
        return this;
      }
    };
    PerformanceEntry = class {
      static {
        __name(this, "PerformanceEntry");
      }
      __unenv__ = true;
      detail;
      entryType = "event";
      name;
      startTime;
      constructor(name, options) {
        this.name = name;
        this.startTime = options?.startTime || _performanceNow();
        this.detail = options?.detail;
      }
      get duration() {
        return _performanceNow() - this.startTime;
      }
      toJSON() {
        return {
          name: this.name,
          entryType: this.entryType,
          startTime: this.startTime,
          duration: this.duration,
          detail: this.detail
        };
      }
    };
    PerformanceMark = class PerformanceMark2 extends PerformanceEntry {
      static {
        __name(this, "PerformanceMark");
      }
      entryType = "mark";
      constructor() {
        super(...arguments);
      }
      get duration() {
        return 0;
      }
    };
    PerformanceMeasure = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceMeasure");
      }
      entryType = "measure";
    };
    PerformanceResourceTiming = class extends PerformanceEntry {
      static {
        __name(this, "PerformanceResourceTiming");
      }
      entryType = "resource";
      serverTiming = [];
      connectEnd = 0;
      connectStart = 0;
      decodedBodySize = 0;
      domainLookupEnd = 0;
      domainLookupStart = 0;
      encodedBodySize = 0;
      fetchStart = 0;
      initiatorType = "";
      name = "";
      nextHopProtocol = "";
      redirectEnd = 0;
      redirectStart = 0;
      requestStart = 0;
      responseEnd = 0;
      responseStart = 0;
      secureConnectionStart = 0;
      startTime = 0;
      transferSize = 0;
      workerStart = 0;
      responseStatus = 0;
    };
    PerformanceObserverEntryList = class {
      static {
        __name(this, "PerformanceObserverEntryList");
      }
      __unenv__ = true;
      getEntries() {
        return [];
      }
      getEntriesByName(_name, _type) {
        return [];
      }
      getEntriesByType(type) {
        return [];
      }
    };
    Performance = class {
      static {
        __name(this, "Performance");
      }
      __unenv__ = true;
      timeOrigin = _timeOrigin;
      eventCounts = /* @__PURE__ */ new Map();
      _entries = [];
      _resourceTimingBufferSize = 0;
      navigation = void 0;
      timing = void 0;
      timerify(_fn, _options) {
        throw createNotImplementedError("Performance.timerify");
      }
      get nodeTiming() {
        return nodeTiming;
      }
      eventLoopUtilization() {
        return {};
      }
      markResourceTiming() {
        return new PerformanceResourceTiming("");
      }
      onresourcetimingbufferfull = null;
      now() {
        if (this.timeOrigin === _timeOrigin) {
          return _performanceNow();
        }
        return Date.now() - this.timeOrigin;
      }
      clearMarks(markName) {
        this._entries = markName ? this._entries.filter((e) => e.name !== markName) : this._entries.filter((e) => e.entryType !== "mark");
      }
      clearMeasures(measureName) {
        this._entries = measureName ? this._entries.filter((e) => e.name !== measureName) : this._entries.filter((e) => e.entryType !== "measure");
      }
      clearResourceTimings() {
        this._entries = this._entries.filter((e) => e.entryType !== "resource" || e.entryType !== "navigation");
      }
      getEntries() {
        return this._entries;
      }
      getEntriesByName(name, type) {
        return this._entries.filter((e) => e.name === name && (!type || e.entryType === type));
      }
      getEntriesByType(type) {
        return this._entries.filter((e) => e.entryType === type);
      }
      mark(name, options) {
        const entry = new PerformanceMark(name, options);
        this._entries.push(entry);
        return entry;
      }
      measure(measureName, startOrMeasureOptions, endMark) {
        let start;
        let end;
        if (typeof startOrMeasureOptions === "string") {
          start = this.getEntriesByName(startOrMeasureOptions, "mark")[0]?.startTime;
          end = this.getEntriesByName(endMark, "mark")[0]?.startTime;
        } else {
          start = Number.parseFloat(startOrMeasureOptions?.start) || this.now();
          end = Number.parseFloat(startOrMeasureOptions?.end) || this.now();
        }
        const entry = new PerformanceMeasure(measureName, {
          startTime: start,
          detail: {
            start,
            end
          }
        });
        this._entries.push(entry);
        return entry;
      }
      setResourceTimingBufferSize(maxSize) {
        this._resourceTimingBufferSize = maxSize;
      }
      addEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.addEventListener");
      }
      removeEventListener(type, listener, options) {
        throw createNotImplementedError("Performance.removeEventListener");
      }
      dispatchEvent(event) {
        throw createNotImplementedError("Performance.dispatchEvent");
      }
      toJSON() {
        return this;
      }
    };
    PerformanceObserver = class {
      static {
        __name(this, "PerformanceObserver");
      }
      __unenv__ = true;
      static supportedEntryTypes = [];
      _callback = null;
      constructor(callback) {
        this._callback = callback;
      }
      takeRecords() {
        return [];
      }
      disconnect() {
        throw createNotImplementedError("PerformanceObserver.disconnect");
      }
      observe(options) {
        throw createNotImplementedError("PerformanceObserver.observe");
      }
      bind(fn) {
        return fn;
      }
      runInAsyncScope(fn, thisArg, ...args) {
        return fn.call(thisArg, ...args);
      }
      asyncId() {
        return 0;
      }
      triggerAsyncId() {
        return 0;
      }
      emitDestroy() {
        return this;
      }
    };
    performance = globalThis.performance && "addEventListener" in globalThis.performance ? globalThis.performance : new Performance();
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs
var init_perf_hooks = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/perf_hooks.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_performance();
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs
var init_performance2 = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/polyfill/performance.mjs"() {
    init_perf_hooks();
    if (!("__unenv__" in performance)) {
      const proto = Performance.prototype;
      for (const key2 of Object.getOwnPropertyNames(proto)) {
        if (key2 !== "constructor" && !(key2 in performance)) {
          const desc = Object.getOwnPropertyDescriptor(proto, key2);
          if (desc) {
            Object.defineProperty(performance, key2, desc);
          }
        }
      }
    }
    globalThis.performance = performance;
    globalThis.Performance = Performance;
    globalThis.PerformanceEntry = PerformanceEntry;
    globalThis.PerformanceMark = PerformanceMark;
    globalThis.PerformanceMeasure = PerformanceMeasure;
    globalThis.PerformanceObserver = PerformanceObserver;
    globalThis.PerformanceObserverEntryList = PerformanceObserverEntryList;
    globalThis.PerformanceResourceTiming = PerformanceResourceTiming;
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs
var noop_default;
var init_noop = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/mock/noop.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    noop_default = Object.assign(() => {
    }, { __unenv__: true });
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs
import { Writable } from "node:stream";
var _console, _ignoreErrors, _stderr, _stdout, log, info, trace, debug, table, error, warn, createTask, clear, count, countReset, dir, dirxml, group, groupEnd, groupCollapsed, profile, profileEnd, time, timeEnd, timeLog, timeStamp, Console, _times, _stdoutErrorHandler, _stderrErrorHandler;
var init_console = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_noop();
    init_utils();
    _console = globalThis.console;
    _ignoreErrors = true;
    _stderr = new Writable();
    _stdout = new Writable();
    log = _console?.log ?? noop_default;
    info = _console?.info ?? log;
    trace = _console?.trace ?? info;
    debug = _console?.debug ?? log;
    table = _console?.table ?? log;
    error = _console?.error ?? log;
    warn = _console?.warn ?? error;
    createTask = _console?.createTask ?? /* @__PURE__ */ notImplemented("console.createTask");
    clear = _console?.clear ?? noop_default;
    count = _console?.count ?? noop_default;
    countReset = _console?.countReset ?? noop_default;
    dir = _console?.dir ?? noop_default;
    dirxml = _console?.dirxml ?? noop_default;
    group = _console?.group ?? noop_default;
    groupEnd = _console?.groupEnd ?? noop_default;
    groupCollapsed = _console?.groupCollapsed ?? noop_default;
    profile = _console?.profile ?? noop_default;
    profileEnd = _console?.profileEnd ?? noop_default;
    time = _console?.time ?? noop_default;
    timeEnd = _console?.timeEnd ?? noop_default;
    timeLog = _console?.timeLog ?? noop_default;
    timeStamp = _console?.timeStamp ?? noop_default;
    Console = _console?.Console ?? /* @__PURE__ */ notImplementedClass("console.Console");
    _times = /* @__PURE__ */ new Map();
    _stdoutErrorHandler = noop_default;
    _stderrErrorHandler = noop_default;
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs
var workerdConsole, assert, clear2, context, count2, countReset2, createTask2, debug2, dir2, dirxml2, error2, group2, groupCollapsed2, groupEnd2, info2, log2, profile2, profileEnd2, table2, time2, timeEnd2, timeLog2, timeStamp2, trace2, warn2, console_default;
var init_console2 = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/console.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_console();
    workerdConsole = globalThis["console"];
    ({
      assert,
      clear: clear2,
      context: (
        // @ts-expect-error undocumented public API
        context
      ),
      count: count2,
      countReset: countReset2,
      createTask: (
        // @ts-expect-error undocumented public API
        createTask2
      ),
      debug: debug2,
      dir: dir2,
      dirxml: dirxml2,
      error: error2,
      group: group2,
      groupCollapsed: groupCollapsed2,
      groupEnd: groupEnd2,
      info: info2,
      log: log2,
      profile: profile2,
      profileEnd: profileEnd2,
      table: table2,
      time: time2,
      timeEnd: timeEnd2,
      timeLog: timeLog2,
      timeStamp: timeStamp2,
      trace: trace2,
      warn: warn2
    } = workerdConsole);
    Object.assign(workerdConsole, {
      Console,
      _ignoreErrors,
      _stderr,
      _stderrErrorHandler,
      _stdout,
      _stdoutErrorHandler,
      _times
    });
    console_default = workerdConsole;
  }
});

// ../../../../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console = __esm({
  "../../../../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-console"() {
    init_console2();
    globalThis.console = console_default;
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs
var hrtime;
var init_hrtime = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/hrtime.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    hrtime = /* @__PURE__ */ Object.assign(/* @__PURE__ */ __name(function hrtime2(startTime) {
      const now = Date.now();
      const seconds = Math.trunc(now / 1e3);
      const nanos = now % 1e3 * 1e6;
      if (startTime) {
        let diffSeconds = seconds - startTime[0];
        let diffNanos = nanos - startTime[0];
        if (diffNanos < 0) {
          diffSeconds = diffSeconds - 1;
          diffNanos = 1e9 + diffNanos;
        }
        return [diffSeconds, diffNanos];
      }
      return [seconds, nanos];
    }, "hrtime"), { bigint: /* @__PURE__ */ __name(function bigint() {
      return BigInt(Date.now() * 1e6);
    }, "bigint") });
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs
var ReadStream;
var init_read_stream = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/read-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    ReadStream = class {
      static {
        __name(this, "ReadStream");
      }
      fd;
      isRaw = false;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      setRawMode(mode) {
        this.isRaw = mode;
        return this;
      }
    };
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs
var WriteStream;
var init_write_stream = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/tty/write-stream.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    WriteStream = class {
      static {
        __name(this, "WriteStream");
      }
      fd;
      columns = 80;
      rows = 24;
      isTTY = false;
      constructor(fd) {
        this.fd = fd;
      }
      clearLine(dir3, callback) {
        callback && callback();
        return false;
      }
      clearScreenDown(callback) {
        callback && callback();
        return false;
      }
      cursorTo(x, y, callback) {
        callback && typeof callback === "function" && callback();
        return false;
      }
      moveCursor(dx, dy, callback) {
        callback && callback();
        return false;
      }
      getColorDepth(env3) {
        return 1;
      }
      hasColors(count3, env3) {
        return false;
      }
      getWindowSize() {
        return [this.columns, this.rows];
      }
      write(str, encoding, cb) {
        if (str instanceof Uint8Array) {
          str = new TextDecoder().decode(str);
        }
        try {
          console.log(str);
        } catch {
        }
        cb && typeof cb === "function" && cb();
        return false;
      }
    };
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs
var init_tty = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/tty.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_read_stream();
    init_write_stream();
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs
var NODE_VERSION;
var init_node_version = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/node-version.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    NODE_VERSION = "22.14.0";
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs
import { EventEmitter } from "node:events";
var Process;
var init_process = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/unenv/dist/runtime/node/internal/process/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_tty();
    init_utils();
    init_node_version();
    Process = class _Process extends EventEmitter {
      static {
        __name(this, "Process");
      }
      env;
      hrtime;
      nextTick;
      constructor(impl) {
        super();
        this.env = impl.env;
        this.hrtime = impl.hrtime;
        this.nextTick = impl.nextTick;
        for (const prop of [...Object.getOwnPropertyNames(_Process.prototype), ...Object.getOwnPropertyNames(EventEmitter.prototype)]) {
          const value = this[prop];
          if (typeof value === "function") {
            this[prop] = value.bind(this);
          }
        }
      }
      // --- event emitter ---
      emitWarning(warning, type, code) {
        console.warn(`${code ? `[${code}] ` : ""}${type ? `${type}: ` : ""}${warning}`);
      }
      emit(...args) {
        return super.emit(...args);
      }
      listeners(eventName) {
        return super.listeners(eventName);
      }
      // --- stdio (lazy initializers) ---
      #stdin;
      #stdout;
      #stderr;
      get stdin() {
        return this.#stdin ??= new ReadStream(0);
      }
      get stdout() {
        return this.#stdout ??= new WriteStream(1);
      }
      get stderr() {
        return this.#stderr ??= new WriteStream(2);
      }
      // --- cwd ---
      #cwd = "/";
      chdir(cwd2) {
        this.#cwd = cwd2;
      }
      cwd() {
        return this.#cwd;
      }
      // --- dummy props and getters ---
      arch = "";
      platform = "";
      argv = [];
      argv0 = "";
      execArgv = [];
      execPath = "";
      title = "";
      pid = 200;
      ppid = 100;
      get version() {
        return `v${NODE_VERSION}`;
      }
      get versions() {
        return { node: NODE_VERSION };
      }
      get allowedNodeEnvironmentFlags() {
        return /* @__PURE__ */ new Set();
      }
      get sourceMapsEnabled() {
        return false;
      }
      get debugPort() {
        return 0;
      }
      get throwDeprecation() {
        return false;
      }
      get traceDeprecation() {
        return false;
      }
      get features() {
        return {};
      }
      get release() {
        return {};
      }
      get connected() {
        return false;
      }
      get config() {
        return {};
      }
      get moduleLoadList() {
        return [];
      }
      constrainedMemory() {
        return 0;
      }
      availableMemory() {
        return 0;
      }
      uptime() {
        return 0;
      }
      resourceUsage() {
        return {};
      }
      // --- noop methods ---
      ref() {
      }
      unref() {
      }
      // --- unimplemented methods ---
      umask() {
        throw createNotImplementedError("process.umask");
      }
      getBuiltinModule() {
        return void 0;
      }
      getActiveResourcesInfo() {
        throw createNotImplementedError("process.getActiveResourcesInfo");
      }
      exit() {
        throw createNotImplementedError("process.exit");
      }
      reallyExit() {
        throw createNotImplementedError("process.reallyExit");
      }
      kill() {
        throw createNotImplementedError("process.kill");
      }
      abort() {
        throw createNotImplementedError("process.abort");
      }
      dlopen() {
        throw createNotImplementedError("process.dlopen");
      }
      setSourceMapsEnabled() {
        throw createNotImplementedError("process.setSourceMapsEnabled");
      }
      loadEnvFile() {
        throw createNotImplementedError("process.loadEnvFile");
      }
      disconnect() {
        throw createNotImplementedError("process.disconnect");
      }
      cpuUsage() {
        throw createNotImplementedError("process.cpuUsage");
      }
      setUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.setUncaughtExceptionCaptureCallback");
      }
      hasUncaughtExceptionCaptureCallback() {
        throw createNotImplementedError("process.hasUncaughtExceptionCaptureCallback");
      }
      initgroups() {
        throw createNotImplementedError("process.initgroups");
      }
      openStdin() {
        throw createNotImplementedError("process.openStdin");
      }
      assert() {
        throw createNotImplementedError("process.assert");
      }
      binding() {
        throw createNotImplementedError("process.binding");
      }
      // --- attached interfaces ---
      permission = { has: /* @__PURE__ */ notImplemented("process.permission.has") };
      report = {
        directory: "",
        filename: "",
        signal: "SIGUSR2",
        compact: false,
        reportOnFatalError: false,
        reportOnSignal: false,
        reportOnUncaughtException: false,
        getReport: /* @__PURE__ */ notImplemented("process.report.getReport"),
        writeReport: /* @__PURE__ */ notImplemented("process.report.writeReport")
      };
      finalization = {
        register: /* @__PURE__ */ notImplemented("process.finalization.register"),
        unregister: /* @__PURE__ */ notImplemented("process.finalization.unregister"),
        registerBeforeExit: /* @__PURE__ */ notImplemented("process.finalization.registerBeforeExit")
      };
      memoryUsage = Object.assign(() => ({
        arrayBuffers: 0,
        rss: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0
      }), { rss: /* @__PURE__ */ __name(() => 0, "rss") });
      // --- undefined props ---
      mainModule = void 0;
      domain = void 0;
      // optional
      send = void 0;
      exitCode = void 0;
      channel = void 0;
      getegid = void 0;
      geteuid = void 0;
      getgid = void 0;
      getgroups = void 0;
      getuid = void 0;
      setegid = void 0;
      seteuid = void 0;
      setgid = void 0;
      setgroups = void 0;
      setuid = void 0;
      // internals
      _events = void 0;
      _eventsCount = void 0;
      _exiting = void 0;
      _maxListeners = void 0;
      _debugEnd = void 0;
      _debugProcess = void 0;
      _fatalException = void 0;
      _getActiveHandles = void 0;
      _getActiveRequests = void 0;
      _kill = void 0;
      _preload_modules = void 0;
      _rawDebug = void 0;
      _startProfilerIdleNotifier = void 0;
      _stopProfilerIdleNotifier = void 0;
      _tickCallback = void 0;
      _disconnect = void 0;
      _handleQueue = void 0;
      _pendingMessage = void 0;
      _channel = void 0;
      _send = void 0;
      _linkedBinding = void 0;
    };
  }
});

// ../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs
var globalProcess, getBuiltinModule, workerdProcess, unenvProcess, exit, features, platform, _channel, _debugEnd, _debugProcess, _disconnect, _events, _eventsCount, _exiting, _fatalException, _getActiveHandles, _getActiveRequests, _handleQueue, _kill, _linkedBinding, _maxListeners, _pendingMessage, _preload_modules, _rawDebug, _send, _startProfilerIdleNotifier, _stopProfilerIdleNotifier, _tickCallback, abort, addListener, allowedNodeEnvironmentFlags, arch, argv, argv0, assert2, availableMemory, binding, channel, chdir, config, connected, constrainedMemory, cpuUsage, cwd, debugPort, disconnect, dlopen, domain, emit, emitWarning, env2, eventNames, execArgv, execPath, exitCode, finalization, getActiveResourcesInfo, getegid, geteuid, getgid, getgroups, getMaxListeners, getuid, hasUncaughtExceptionCaptureCallback, hrtime3, initgroups, kill, listenerCount, listeners, loadEnvFile, mainModule, memoryUsage, moduleLoadList, nextTick, off, on, once, openStdin, permission, pid, ppid, prependListener, prependOnceListener, rawListeners, reallyExit, ref, release, removeAllListeners, removeListener, report, resourceUsage, send, setegid, seteuid, setgid, setgroups, setMaxListeners, setSourceMapsEnabled, setuid, setUncaughtExceptionCaptureCallback, sourceMapsEnabled, stderr, stdin, stdout, throwDeprecation, title, traceDeprecation, umask, unref, uptime, version, versions, _process, process_default;
var init_process2 = __esm({
  "../../../../../usr/lib/node_modules/wrangler/node_modules/@cloudflare/unenv-preset/dist/runtime/node/process.mjs"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    init_hrtime();
    init_process();
    globalProcess = globalThis["process"];
    getBuiltinModule = globalProcess.getBuiltinModule;
    workerdProcess = getBuiltinModule("node:process");
    unenvProcess = new Process({
      env: globalProcess.env,
      hrtime,
      // `nextTick` is available from workerd process v1
      nextTick: workerdProcess.nextTick
    });
    ({ exit, features, platform } = workerdProcess);
    ({
      _channel,
      _debugEnd,
      _debugProcess,
      _disconnect,
      _events,
      _eventsCount,
      _exiting,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _handleQueue,
      _kill,
      _linkedBinding,
      _maxListeners,
      _pendingMessage,
      _preload_modules,
      _rawDebug,
      _send,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      arch,
      argv,
      argv0,
      assert: assert2,
      availableMemory,
      binding,
      channel,
      chdir,
      config,
      connected,
      constrainedMemory,
      cpuUsage,
      cwd,
      debugPort,
      disconnect,
      dlopen,
      domain,
      emit,
      emitWarning,
      env: env2,
      eventNames,
      execArgv,
      execPath,
      exitCode,
      finalization,
      getActiveResourcesInfo,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getMaxListeners,
      getuid,
      hasUncaughtExceptionCaptureCallback,
      hrtime: hrtime3,
      initgroups,
      kill,
      listenerCount,
      listeners,
      loadEnvFile,
      mainModule,
      memoryUsage,
      moduleLoadList,
      nextTick,
      off,
      on,
      once,
      openStdin,
      permission,
      pid,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      reallyExit,
      ref,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      send,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setMaxListeners,
      setSourceMapsEnabled,
      setuid,
      setUncaughtExceptionCaptureCallback,
      sourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      throwDeprecation,
      title,
      traceDeprecation,
      umask,
      unref,
      uptime,
      version,
      versions
    } = unenvProcess);
    _process = {
      abort,
      addListener,
      allowedNodeEnvironmentFlags,
      hasUncaughtExceptionCaptureCallback,
      setUncaughtExceptionCaptureCallback,
      loadEnvFile,
      sourceMapsEnabled,
      arch,
      argv,
      argv0,
      chdir,
      config,
      connected,
      constrainedMemory,
      availableMemory,
      cpuUsage,
      cwd,
      debugPort,
      dlopen,
      disconnect,
      emit,
      emitWarning,
      env: env2,
      eventNames,
      execArgv,
      execPath,
      exit,
      finalization,
      features,
      getBuiltinModule,
      getActiveResourcesInfo,
      getMaxListeners,
      hrtime: hrtime3,
      kill,
      listeners,
      listenerCount,
      memoryUsage,
      nextTick,
      on,
      off,
      once,
      pid,
      platform,
      ppid,
      prependListener,
      prependOnceListener,
      rawListeners,
      release,
      removeAllListeners,
      removeListener,
      report,
      resourceUsage,
      setMaxListeners,
      setSourceMapsEnabled,
      stderr,
      stdin,
      stdout,
      title,
      throwDeprecation,
      traceDeprecation,
      umask,
      uptime,
      version,
      versions,
      // @ts-expect-error old API
      domain,
      initgroups,
      moduleLoadList,
      reallyExit,
      openStdin,
      assert: assert2,
      binding,
      send,
      exitCode,
      channel,
      getegid,
      geteuid,
      getgid,
      getgroups,
      getuid,
      setegid,
      seteuid,
      setgid,
      setgroups,
      setuid,
      permission,
      mainModule,
      _events,
      _eventsCount,
      _exiting,
      _maxListeners,
      _debugEnd,
      _debugProcess,
      _fatalException,
      _getActiveHandles,
      _getActiveRequests,
      _kill,
      _preload_modules,
      _rawDebug,
      _startProfilerIdleNotifier,
      _stopProfilerIdleNotifier,
      _tickCallback,
      _disconnect,
      _handleQueue,
      _pendingMessage,
      _channel,
      _send,
      _linkedBinding
    };
    process_default = _process;
  }
});

// ../../../../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process
var init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process = __esm({
  "../../../../../usr/lib/node_modules/wrangler/_virtual_unenv_global_polyfill-@cloudflare-unenv-preset-node-process"() {
    init_process2();
    globalThis.process = process_default;
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
  }
});

// ../../../../../usr/lib/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../../../../usr/lib/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// src/brand.js
var brand_exports = {};
__export(brand_exports, {
  FAVICON_B64: () => FAVICON_B64,
  FAVICON_HREF: () => FAVICON_HREF,
  OG_B64: () => OG_B64
});
var FAVICON_B64, FAVICON_HREF, OG_B64;
var init_brand = __esm({
  "src/brand.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    FAVICON_B64 = "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACQUlEQVR4nO1bMVLDMBC8MHTMUMEPKPODfIJH8Ik0FDT5BI+g5QH5QUp+QKrMpIaCkccoknPW7cqWrK0wieXbvb2zZDkiDcvGKuWku/uHH3QgKJxPx1Gc1F+eM+kYNGLcaAYqkbyILu5BhUolHkLMDVEH1EReJM4nKEBt5B1CvFQ9oGZcCFBr9h18fjdDH9aKPs9WAlMHMDU6AZZifwfH9zb3hZ9fv69+5+PtMUMkf+hmR0wHaEjHwBTjfDquqAJYiPtgCHE+HVe0JogkzxjPgeKAa8EOZdNy7lhQSiBGICVw5FghwAUIBYwIljUutAewgoyNg+oJEAekkl/vd93fh82Wdp0YIA5gZl4zrtUJ8Nuglnw/+6Fj6/hamARg3ZvHwhIH1AGp2WddR4NJl8OHzVbV/JhIFiDVdkPZtzgjNR6YA8ba0pp5VBlkLQFr7TMAfyCiIeln/7DZduet97uoO/yxv+RdRESePl9SQhWRgp4JstyTXYCpu74PeAmkEhwqAz/77jPERKyYEmCBuhxGgJl9EYMAjBWfXz5jGl9qPLMtgRB5RgOFCsBcHfbJI69jEiDnDs4QLHHAS8CanZDNWdkXAQjAfGCpGdfqQthjcUZw/QkRY/y2L9B2hki7w4veG3RgNEL0bZe6PY4OljXnaG+IuINcL0nN6R2hSQSYE/71gLG/tCgdju9sl8O50AToHyylDPo8LxxQuwg+v1YCoX/W6oIQr6gDahMhxkdFsuRJ0rVEqnpAqW7QxL343w4vHr86AzHvGa984AAAAABJRU5ErkJggg==";
    FAVICON_HREF = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACQUlEQVR4nO1bMVLDMBC8MHTMUMEPKPODfIJH8Ik0FDT5BI+g5QH5QUp+QKrMpIaCkccoknPW7cqWrK0wieXbvb2zZDkiDcvGKuWku/uHH3QgKJxPx1Gc1F+eM+kYNGLcaAYqkbyILu5BhUolHkLMDVEH1EReJM4nKEBt5B1CvFQ9oGZcCFBr9h18fjdDH9aKPs9WAlMHMDU6AZZifwfH9zb3hZ9fv69+5+PtMUMkf+hmR0wHaEjHwBTjfDquqAJYiPtgCHE+HVe0JogkzxjPgeKAa8EOZdNy7lhQSiBGICVw5FghwAUIBYwIljUutAewgoyNg+oJEAekkl/vd93fh82Wdp0YIA5gZl4zrtUJ8Nuglnw/+6Fj6/hamARg3ZvHwhIH1AGp2WddR4NJl8OHzVbV/JhIFiDVdkPZtzgjNR6YA8ba0pp5VBlkLQFr7TMAfyCiIeln/7DZduet97uoO/yxv+RdRESePl9SQhWRgp4JstyTXYCpu74PeAmkEhwqAz/77jPERKyYEmCBuhxGgJl9EYMAjBWfXz5jGl9qPLMtgRB5RgOFCsBcHfbJI69jEiDnDs4QLHHAS8CanZDNWdkXAQjAfGCpGdfqQthjcUZw/QkRY/y2L9B2hki7w4veG3RgNEL0bZe6PY4OljXnaG+IuINcL0nN6R2hSQSYE/71gLG/tCgdju9sl8O50AToHyylDPo8LxxQuwg+v1YCoX/W6oIQr6gDahMhxkdFsuRJ0rVEqnpAqW7QxL343w4vHr86AzHvGa984AAAAABJRU5ErkJggg==";
    OG_B64 = "iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAIAAADAIuwLAAB47ElEQVR42u3dZ3wTR8LH8ZVkWS6y3LvBFFPc6b13CDUJhPRCcimXy6Vc2pN2yeXSk0vvvQCBFEggdAiEXg3GVIO7jXuVi6zyvBAIYVtrWZZs2f59P7zA0kranZ2V9r8zOyO58Q2DAAAAAADoeqQUAQAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAANBhSDxVAZQCAAAAAHRBtBACAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAEAgpAgAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAACAjs2FImiSu6cvhQAAAAB0JjXqUgqBQEgIBAAAALr6CT/hkEBIFAQAAAC6dAQgFrpQDzgYAAAAAGIhgZAoCAAAAIBY2IVIu/IuBwAAAICunBGk7GkAAAAA6JpJwYUdDAAAAADmkaHrdB+VdrVdCwAAAABkh64VCEmDAAAAAEgQXTQQAgAAAAC6YiCkeRAAAAAAOaIrBkLSIAAAAADSRFcMhKRBAAAAAGSKLhoIAQAAAABdMRDSPAgAAACAZNFFAyEAAAAAoCsGQpoHAQAAAJAvumggBAAAAAB0xUBI8yAAAAAAUkYXDYQAAAAAAAIhAAAAAIBACAAAAADo3IGQGwgBAAAAkDW6aCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAHEuFEHHMv2RM9YstuHNvpQVAAAAAHEST1VAJ9skd0/fLpgAyYcAAABAG6hRlxIICYQdIweSDAEAAAACIYGwq+dAkiEAAABAICQQEgWJhQAAAACBkEDYtaMgsRAAAAAgEBIIO1gUtDK8Oe6dAQAAAAIhgZBA2HZRsJVRrS0/CwAAACAQEggJhK1NaA4KZu340QAAAACBkEDY1QNhs5GsDfKYM6wDAAAAQCAkEHahQOhsMYxYCAAAABAICYTtn77aMXo57YoBAAAABEICYWcIhCKhy0kSl/OvIQAAAEAgtDspe5SsJb4m7T5NIgAAAAACIWmQTAgAAADAnugy2g5p0Mk7YXbQ1QYAAADaAF1G0cljlaU1pJ0QAAAA6GQIhKRBMiEAAABAIEQ7pSzWFgAAAEC74B5C+2uyGa2D5qvOtC0Auqw7l9z+4IMPNPmURqMZNHg4RQR0nUPb5i8Evklg0snuIXRhj5KgRGx4s2/jLZr+yBkyIawklUoTEuITEuJjY2N69eyp8lZ5KZVKpbK+XltXV1tbW1taWlZQWFiQX5Cbl3f+/Plz585nZGTqdDqKritzc3MbNGhgbGxM/359Q0JDQ4KDPD2Vbm4Kg8FQVaVWq6uKi0vOnTt/NjX15ImTR5KOUmEAACAQOm8a7Kxb6oSZcObM6a+/9kqzi826am5mZhbV1dF8fX0XLrzmmmsWhIeFNX5WoXBVKFxVKlVQUFC/flfUpfr6+lOnTiclHU1KOrp7z97KykoKs4uQyWSTJ0+cP2/u8OHDFQpXC/XKx9fXJyIiIjExwfhIVVXVrl27N23eunnzFq1WSzGi3Xl4eOzft0tkgclTZuTn51NQAAiEXYVDg1PvjY8Z/3Nu2muOW/+OEnTnz5trzWLz5s557/0PqZmODudP/d+TPj7eNrxWLpfHx8fFx8fdfPONTzz59Jo1a8WXf/bZpxYtvLbJp9LT02fPWcDucH5SqfSaqxfce+/fgoKCWvpapVI5ffq06dOnFRYWrfzp56+++qampoYiBazHtyjQ1X+FKQJ7aePOor03PmZKg43/bINM62wpMSgocOTIEdYsOXfuHIlEQo114LnFM0+9/tortqVBdEH9+vX9aeXy55572oY0aC4wMOC+e++OCA+nSAEAIBA6hc50o53zb8uc2bOlUqvqc2hoyLBhQ6mfDvKvRx5atOhaygFWWnjtNcuXfd+3bx+KAgAAAmEH1sbNZZYaAx3XSOgMWy1u3rw51i9sZedStNTYMaNvu+0WygFWeuAff3/uuaflcjlFAQBAe+EeQkfpfONwOvPNhAkJ8b169bR++alTJ7/435fVajUV1Y6kUukjjzxEOcBKf/vbnX/7252UA4CO4vMvvvr8i68oBxAI0QQnaR5sr213hug7b+6cFi3v5uY2beqUX1etpvba0Zgxo6OieosssGfvvk2bNh8/npKXl1ddXa3T6b29vVUqr/DwsOjo6Oj+/QcNGhgQ4E9JdgWTJ0964B9/b3YxvV5/+PCRP7fvOHTocHFxcXFxsVwu9/X19fP1jYuLHTZ82NAhg1UqFeUJAACB0Ll01mn6nLOR0NXVdebM6S3OkPPnEgjta/y4sZaeqqvTPPTwv3bs+KvB48ZT/LS09J07dwuCIJFI4uJix48fN33a1J49e1CknVVQUNCL//l3s4vt3bf/9dffPH36TIO6VFWlzsrKPnos+Yely11cXCZOHH/brbeYZqEAAAAEwjblbM2DvTc+5rgpKCyVQPsG4IkTJ9jQRDB40MCIiIjs7GxHrJJUKh01asSkiRPj4mLDw8OUSmV9fX1hYdHJk6d27Phr/YaNtbW1Hf0TGxsxYrilpz797PPGabAxg8GQnHw8Ofn4++9/OHTokEULr63XaJzhMO8RGTl6zKi42NiePXuEhIQolZ6urq719drq6ur8/PzMzKwTJ07s3rP35MlTBoPBQeuQkBA/ffrUAYmJkZGRSqVnfX19fkHB22+/t3nzFvEXhoaGjBk9Oj4+rnfvXiEhwSqVSqFQ1Ndr1eqqCxfyU1PPJR09un37X205K9qj/3rYy8tLfJl33/vg008/b/attFrtpk1bNm3aMm7smMcffzQysnvrVy8uLnba1CmDBg2MjIz08lLW1taWlJRmZGbu2rV78+atFy5csP6tVCpVWFhoWGhoaFhoWFhoWGhYQIC/l5eXSqXy8PCQy12M909qNJqqKnVxcXF2dvbZ1HNHjiQdPHiorq7OQeVvxw1soHv3brOvmjVs2NCePXt4e3vrdPry8vL09PQDBw6uW78xPT3dQVvkhJW8bThuV7KPHKq9jhQn2REOrbceHh7Dhw9NTEzs169veFhYQIC/m5ubi4uLWq2uqKzMzMg8d+784SNH9u7dX1FR0ZoC7Nmje2hYqErl7ebmVl9fX1VVlZeXe/bMmcNHDm/dsvXChbyOVSclnqqATnaYuXv6tm8gbJuJB0U4OhC28SY368MP3xs3dkyTT6VnZISGhCgUiqZf+NEnH374sfUfdOeS2x988IEmn9JoNIMGX4xDEyaMf/RfD4ucmJaXl3/44cdLl/3YbHho+09sjcOH9rm6Nj2Z+Lz515w7d95eHzRmzKiPP/qg9e+zbNmP/33pFbELZi4u8+fPvX7xdf36WVXDc3PzVqxYuWz5CitvT7Vy//aIjHzmmf8bPnxY48Vefe2N7777wdI1gunTp9504w3WNJ0ZDIY9e/Z+8eXX+/btd/QBGxMdvWLFUvFlXn751R+WLm/pO7u6uv7j/vt+XbX6/Pk024o6Jjr68Sf+NXjQIEsfodFoli5d/uFHn1RXVze7PgEB/n9u22xbKanV6o0bN3319beNt6U1dcm+G2guKCjosUcfnj59mqVJfQwGw9at21597Y3c3DxBEObPm/vii89b/JWZflVObq41F8Kcs5K3ZmL6ttmVbfYt6uh9ZGVx2eVVrXlh+x4pzrMjHPcVJAjCoEEDb7j+ukmTJlo6FTGn1+v3Hzj488+/bNmyTWPFpeeWFuDOnTs/+fijPXt2d5T0xCijHYlT3T3oJAIC/MeMHmXp2d9+W7Njx05Lz86bO9u+ExK6uLg8+8xT77/3tngzhbe395NPPv7Jxx8olZ4d7hMtMTaaWXq2srKqw1WtEcOH/f7br/9+7hkr06AgCGFhoQ8++MC6P36bfdUse63GuLFjVq5c1mQaFATBUgWOi4tduWLZ66+9YmVHSolEMmrUyC8+/+Sdt9/09XXsNbVbb7tZfIGNGzfbkAaNZxJvvvW2lQmqsSV33L5s2XciZyrGzHnbbbd88fkn3t6OnWbT09NzwYL5v/6y8pGHH5TJZHZ5T8dt4MiRI379ZcWMGdNFvlElEsnkyZN++XnF+PHj7LI5zlzJHc2p6ir7yMmPFOfZEY6rt+Hh4R999P6333w5Y8Z0a9KgMeCNGD7s9ddemTPnKkcU4NixY7//YelHH33i5+dHIOz8nK2trG003sZ2vLFwzhyx6QfXrVu/fv0GkW+QIUMG2zEN/u+tN6yfgm/UqJFffvGZp6dnB/pEER4eHiLPxsZGd6xKft9993z22cfdukXY8Fo/P79XXvnviy8+7+LS2j75I4YPe+edt9zd3S3+6ghNnFXceMPiH77/xvoca27y5Ek///Rj//79HHfhYNrUKSILlJeXv/CfF9v6h1Aq/fdzzzz00ANWRq/4+LgP3n/HyolPW0Mmk91++60ff/yBQuHqtBs4YcL4jz58z8qzN6VS+e47b02fPq2VJePMlbxr1lX2kXMeKU6yIxxab6dPm7rq15Vjx4x2wpo8bfr0NWvXxcTEEAhhN002DzbZO7RLNSSKjC+aknIiKyv7z+07RDoetGj2QnHPPvPUxInjW/SSmJjo1159qQN9ooiKikqRZx95+MEONHzoU//3xH333t3K1uP58+a+8/abrWnbCQkJefPN18Tn6Gu8jn//+71PPvl4az43KCjw66++iI7u75BTovHjxbfol19WlZWVt/Eef+KJR6+99uoWvWTAgMSbb7qxbVZv5Ijhz//7WefcwD5RUW++8WqLrn3IZLJXXn5x0KCBNm+Ok1fyrlxX2UdOdaQ4z45wXL294frFb7zxqshl03avycHBwcuWr4iJjSUQAo4SGxsjMs/BunXrBUGoq6v7888dlpaZNnWKXb5HXF1dr756vg0vHD9+3Ny5szvEJ4qrra0VCd49evT4bfUv9917t21tbm3p9ttvvf766+zyVuPHj3vyCduvzjz77FPNX0u+MhFee+3V997zt9avuVLp+dGH7/v72z/Djxgpdo+NXq9f/uPKNt7jrq6uN1y/2IYX3nXXEiv7JrXe7NlX2dx/zHEbKJPJ/vvfFyzdpC1CLpfb9vXVISp5F6+rXXwfOc+R4jw7wnH1dvr0aU8++Zh97/1xTAEqv/zy64AApx60hUBou3afgMHYPNjGY4o6VWnMnzfX0lMGg2Hd+o0Xk+H69ZYW8/DwmDZtSvsW3WOP/quNb5Zw0CcePZYs8qxKpbrvvnvW/fH72jWr//PCcwuvvSY6ur+9bo6yl5jo6H8+cL8d33Dx4kUTJoy34YWurq6Whkq6Mg9e/iHs1avnk088LrLwlq3b7v/HgxMmThkwcOjYcRPv+/sDu3fvsbRwQID/C88/a/cSTkwQuwHj3PnzOTk5HeUnwMfHe/LkidYsqdfrT58+88MPy55//sUld949Y+acseMmDRk6MiFx8LDho6fPmH3PvX//+utvS0vLRN7kH/ff52wbeNutt8TEtGlv8A5RyTt0XWUfOULbHymdY0eI19vw8PAXnn/WcWmw2QLctHHj3+66c8Twof36Rg0ZPOjOJXf89ZfF0dQDAwNffuVVZ66lTDthT467gbClvUAdPfmEM0xIKJfLZ86cYenZI0eSTGO47dy5u6qqSqlUWkqVq1f/bs/C2bBx5cqfT585U11dHRQUNG7c2DuX3BEYGCDylXfDDYs/+OCjDvSJTdqzZ+/IEc2PsRYZ2T0ysvuCBfMFQairqzt58tThw0cOHDh4+EiSlYNzOs6TTz4m3qUnOfn4Dz8sO3DwUElJibe3Kj4+7vrF140aNVLkJY8/9q9du3bX19fbvFZ1dXU//fTLlq3bzp8/X15e4evrExgY2CcqavToUXW1l2cmePKJxyzdaabRaB599IktW7eZHiktLdux468dO/4SGRpu/Phxo0eP2rXLboOkubi4iI9+dDTpWPtWgF27dv+wdPnx4ylqdVVkZOTixYsWLRS7R3fChPHr1m2wfFlKOHosefWq3zZs3FRe3nQ/2Orq6urq6pycnJ07d3/40Scvv/zi5ElNnwD1798vNjYmJeWEk2ygXC6/rbnxgQ4ePPTd90uTko5WVFT4+/uPHDH8jjtua80Uo85fyTtoXbXntyj7yAmOFKfdEXast088/mizYyKkpaX/8uuqffv25+VdqKys9Pb2Dg4KGjZsyPjx44YOHdLKAlzz+y9mBViybdvWbdu23nPPvY8+1nSMnDRp8rhx43bs2EEgBOxpwoRxPj4WO9StMxtLpr6+fsuWbZZuFxwyZHBYWKhxfOdWMhgM//fUM7//vtb0SFZW9g8/LFuz5o9PP/kwNtbiXcXXXD3/o48+0ev1zv+JIn755dd77r5LfHSZBhQKxYABiQMGJN5xx216vX7v3n2/r1m7Zcs28fGmd+7cHRd/+baKZ599ytIvSnp6+uw5C6xcmaFDhwwcOEBkge++++H1N94yFVpRUfG2bdu3bdsu8gsqCEK3bhEzZkwz30ctcurU6X/+82HzgcULCgoLCgpTUk6sWv2b6cHEhPiRI0dYepPn/v2C+W+/uc+/+CqqT5SlYVHvXHK7Hc/DQkNDxAcJaGXaaaW3/vfOl19+bfrzzJmzL7zw3/T0jMcefcTSS2JFr/oXFxffeOMt1q9AdXX1Y489+dvqn8PDw5tcYOLECa0pIvtu4PTp08Q7Gnz66efvvf+haaqbCxcu/Lpq9do/1r3+2suTJ0+yYf07RCXvKHXVQd+i7CNnOFKcdkfY8SsoOrq/+BgKOp3utdfeWLZ8hfl5TnFxcXFx8YmTJ7/+5rvY2Jj777/P0lA0Nhfgxx9/1Ldfv3nz5jf57D333Oe0gZAuox1As8PJOEmv0TYm0l9Ur9dv2LDpynxosdeoRCIRGZmmRT799PMmz/vLy8v/fv8DVVUWm7+CgoLGWtE/0Bk+UURZWflXX31j+5eRVDpq1MiXX3px86Z1dy653c3NrY1r1MJrrxF59q+du157/c0mI/TnX3wl3sgs/s4iMjOzltx5tzXTTC1atNDSU8eOJYvHUZG24qFDh1gKJzZo9g6KkpKS9vo++fnnX83PVEy+/fZ7kUmiIyMjbbgvSERdXd3atessPTu4FcNL2H0DxUfk2rJl67vvfdB44lONRvPoY0+mpaXbsAkdopJ3nbrKPrJS2x8pzrkj7Ftvr18sdqu/wWD454OP/LB0uchV75SUE/fee/8zzz7f5JlSawrw7f/9z9JTw0eM6NatG4EQsBt/f/8xlocY3rf/QIMzyz179okMXTh37pzWd0MvLS39/IuvLD1bVFT87bffiby82d4LzvCJzfrk089FbkKwkkqlevDBB1av/rktb7pwcXEZN26syAKvv/5m49/syz8A77wrMrPtgAGJtt20+cILL1rqamhOJpOJXCv95ddV4i/PysrOyMi09OyECXabC6vZAZwqKivb5ftErVa//c67lp7dvWevyOUku0/ylmb53KhPnz5OsoFSqTQxIV7kbOz1NyyeEmk0mv/9752WbkJHqeRdqq6yj5o/yW7zI8U5d4R9661UKp00Seye2K+//vbPP7dbs2K//rpqw4aN9i3AzMyM9HSL0+FOmjzFSesq0cI2bTYDofWzTVjzQjtq39kIZ181S2Q8EuP4ouZ0Ot2mzZstLd+tW8SggQNbuUobN26uqakRWeD3NWKXlBLi45z/E5ul1+sf+OfDmzZtaf1bhYeFffft146bWaiB/v37KZUW70Y4dixZfLrzwsKiXbv2iJwTDBLtjNqkEydP7t2335ol+/Xrq1KpLD178ODhZt8h13Ij5MABifYq5GbHOWyvm0i3bNkmMqCL+EV6Ly+lfVemrq7O0lM+Pt62tZzbfQP79+sn0jn80KHD2dnZIu+5fcdfpaWlLdqEjlLJu1RdZR81/8vS5keKc+4I+9bbvn37iNwxVFtbK3KtvG0KUGS3Dh402DnrKvcQokMS6YOh1Wo3b97a+PH16zeK9NybP3/OocOHW7NKIpe4jLKysnNyc8PDwpp8NjY2RiqVtuimvrb/RGvU1tY+/Mijixcv+vt994p8ZVtDoXB9/fVXFi++KT0jw9E1Krq/2CRLu6xo9ty1e7fINcXomGhLtxxY8scf661cUrwpdc3vv7amZHr16mWvQm52ZJ0W3YBqR9t3/CXyrHgjrfXrHB4WNnTokOjo/pGRkSEhwb6+PkqlUi6Xt2jScH8/P2u6EDt6A/v0jRJ5yf4DB8XXR6fTHT58pEX3R3WUSt456qpt2EfOcKQ4546wb70V38AtW7dZ07OmvQqwd1SUc9ZVWgidmvXNg13qNsKY6Oi+fS12ndq1a3dFRUXjxw8cOFhUVGzpVdOmTW3lTWupqanNLnMu9Zzl8KOwNA6q83yilQwGw7JlP86cNef99z9s5Wg9SqXykUceaoNKFR4hdl9E6tnmi1p8mbDQ0Jau0vHk49auvCPvrgkJCbbXW4k3aAuC4G35oqxDnT4t1ruhtqZW7Ee0ud7mCoXrokXXrlyxbMOGtS+++PyNN14/ZsyoqKje/v7+CoWiRWlQEAQ3dze7b6D4fmlyA328fVr51XTW8ldTh67k7VtXbdiV9vwWZR85wZHinDvCvvW2W4TYhMaHDh125poc2vKTAQIh0DTxW7QtjVCs1+s3btpk6VWenp5TpkxuzVrl5xc0u0xhYZHIs6oWng23/Se2SGVl5ceffDZj5uwld9791VffnDx5SuQePBETJ46Piurt6Erl7yd2j19+QfNFXVBYKPb+/n4tXaVzop1UzQW0/M1blMnt9VZFRUXiC/j6+bbLV4ppipomtWbKkISE+NWrfn72maeio/vbZVXFp0WxbQO19dqWvqFK5SXyrMgN22bLlLXoEztKJW/fumrDrrQj9pEzHCnOuSPsW28DAvxFnk1Pz6Am2/LjQrpoG/a6o69FLYHWzEZo/Yo5SSOki4vLrFkzLT1bV1e3ddufIlnxhusXW3p2/vy5a9bYODeAXq+vra1tdjHxW6TEfzna/RNtLpl9+/bv27ffmD8HDEgcOHDAwAGJ8fFx1g95N27c2NSWXyVtETc3sfFOxKfBuFTUYss0O55Kk4naLivfSlKp1F5di/PyLuj1epE2sdjYmJ9++qWNv1L0er349Wmdrds+dszo//3vDfuOl2vD8FeO2EDx6b+s+Wqy5pjqiJW8g9bVNvgW7SL7qN2PFCfcEXavt+Ib2GQfMecpQJlMJpPJdDodgRCdLaO2sfHjx/n6+lh6dvv2v0S+PZOSjl64cCEkJKTJZ4cNHRIaGpKXd8FxKy9xcI8dZ/hE8a9p49S3giC4uromJMRPmjhh1qyZ4lf7BEEYMnhQk8NV27WgxJ61qWnzyncQWvYW9fX1Wq3WLivvPLWovr4+MzOzR48elhYYkJjQ9tWy2XI22HQOGhwc/MYbr7b97Clts4HiV5qsudbT0kskHaWSd8S62jbfol1kH7X7keKEO8Lu9dbxG+jwY8UJ6yqBsCMRb6M7N+21DprxWkRk+kFBEKZNm3I8+Yht7yyVSufMmf3pp5/b9lo3N7dmr/aJ39NfUVHpzJ9oXxqN5uDBQwcPHnr7nfduuP66hx76p8iwsaGhIY5eH/Hrl56ezQ/GIL6M+H1oTUXQFgTImtrajnL8Hj2aLBIIe/fuHR4WZsOgKU7oiccfFW8c6NDKRa/BW9MX3cfHp2VHaMep5F0W+8gZjpSusCPEf69bfy9M16zJBMJOzlKv0Q4aHX19fceOdeA8BPPmzrEtEAqCEBwcJDJ1j1FgYIBoPKtw8k90UDL8+pvvtDrdE48/amkZb28fR69GcYnY0N7BQUHNvkNQYKDY+xc7cMp1kTfX6/WDh4xozV1w9rVn7z6Re4ClUul11y18y6apt5yKSqWaNGmCyAKFhUVLly3fs2dvZmZWVVWVef+radOmvPXm606+geL3NfXq1XNLc1PP9GnhjcEdqJJ3WewjZzhSusKOEBkgUBCEHj0i9+8/0AY1uUZd2pnqKoPKdBhdahxRS2bPnmXbmApWiozsPrDl88UZRVkxlHBvy9/sdXV1VVVVTv6JjrNy5U91dRYndm+DnkI52TliRd2n+aIWXyY3L69dVl4qlUZEhDvPIfznn9vFz0WuuWaBo6fPbgPjxo0VafE+evTYnLkLPvvsi+PHUyoqKhrcjePqqnD+DRQfM7DZmcqkUumgQQM7ayXvsthHznCkdIUdkSU6eePgwYOoyQTCrp4GrVys4/YsFe8v2r4fMWrkCPEFIiIiLE0JKAhCSsqJlt4u3/af6Dh1dZqiIoujdJaViV2HM+gt9660OkmePHVKrKhHjWz2HUaPGiX2/idOOq70TpwUe/OhQ4Y4zyFcVVW1aZPYJXFvb+9nn32qo39j9+rZQ+TZZ579t8i1mKCgQOffwLNnU0Vujho5coTInd6CIIwfP9bPz6+zVvKOyC7fouwjZzhSusKOOCH6ezp50sRWXlXsmjWZLqPOlehYQxF9+/bp16+voz9l+vRpL738al1dXUtfOG3alNffeEvkpr45s2eJvPyY1ZPOteMninv5pRcPHT78229rNBpNS18rlUpF7pQoLS0Tea3I7QTeKmt/FU6dOl1VpVYqm77pKyE+rkePHunp6ZZe7u/vP3q0xdCo1+sPH0lyXKU9ffpMVVWVpcGsp06bsmLlT85zIH/9zbezZs0QOwanTT18w+Ifli5v6TvL5fJ/3H/fqtW/nbd6xg4H8fe3OE5SYWGR+OoNafXl7Tag1+uPHDk6ZswoSzvi/r/f958XX7L07IP/fKBzV/IOxy7fouwjZzhSusKOOHPmbFlZuY9P0zXTzc3tziW3v/nW213kJ9VeaCHs/Bq0B1o/2b2zWTB/Xht8ilLpOWXyJBte6Ovru2TJ7SIniLfeerPIyw8ePOT8nyguMrL7v597ZsP6tbfddktLr89NnTJZZAQO8RNokcYWX1+fPlZ0rBUEQavVGoc/bZJEInns0YdFXv7gP+93dXW19GxS0tHSUgfebKDVav/8c7ulZ0eOGJ6YEN/S95RIJLNnX3XffffYfW1PnDi5fv0G8WWefPLxu+5a0qK3HTNm1K+/rrzjjttkUlm7f1mJTB8vPuBeRETEmDGjhY5g1erfRJ697rqF1123sPHjrq6ur77yUu/evTp3Je9w7PUtyj5q9yOlK+wIvV6/des2kQVuu+2WCRPGW/NWM2ZMnz5tatsU4Pz5C/75zwcJhECryGSyq66a2TafNX++jb1G7/7bnU02fXh5eb3/3tsis5EWFBT+9dfODvGJzQoMDPjXIw9t/3PzB++/M2vWDGuGzB4yeJB4L8E9e/aKPJufLzZr/BtvvDphwng/Pz+R6e+MfvpZbAa8cePGPvrow02+yW233bJgwXyb39kuVqz8WeTZl1560cvL2jknpVLp5EkTV65Y9srLL4YEBztibV9/43/NzrL4zwfu/+yzj/v27dPs2k6aOOHbb778+KMPekRGOsn3VZnlNu2QkGBLQz1JpdLn//1MsxXVSWzevEV8aIdnnv6/9997e+yY0b6+vi4uLsHBwfPmzflp5fJp06Z0hUresdjrW5R95AxHSlfYEcuXrxBPX++8/eaNNywWqbE9evR47dWX33j9FaWX0tEFOHXatN9+X/vmW/8LCQ112opKl1EbbXiz7/RHrrhXePojZza82bfdV0x88gk7Ng822HxjmThuu8aNGyPSkz45+fj1N9xs/bspFIod27dYapIaPnxYcHBwfn5+i6+vSKWvvfryxAkTfvr5l9OnT1dX1wQFBY0fN2bJkjvE7wv6+ZdfbZultO0/0dpvFheX8ePHjR8/TqPRnDp1+tix5GPJyZmZWWVl5WVlpdXVNR4e7sHBwTEx0dOmTp0wYZzIsDH19fX79u8X+Szx2/969+71/ntvN3784MFDt91+p/kj+/cfSEo6OsDyXf633nLzwAEDvv9h6cGDh0tLS728vBIS4q9fvGj0aLG7B7Ozs9et2+DoA//w4SMHDhwcOrTpexsiI7t/++2XDz30qEivV0EQgoICZ82auWjhtd27d3Pw2Wf+M88+//b/3hBfbOSI4T+tXH7o0OHt23ccPHS4qKi4pKRELpf7+Pj4+/vFxEQPGzp06NAh4jfhtIvMzEyRM5VHHnnoiScaXgFxdXV98T/PDx8+rKP8CGq12i+/+vqxRx8RWWbChPFWXqfvfJW8Y7HXtyj7yBmOlK6wI06cPLlt2/aJEy0Wmkwme/LJx6+7btGvq1bv27s/70JeZWWVl5dXYGDAoEEDx44ZPXbsGJG4aE0B3nfP386fPy+yksHBwXPnzrv+hhsiI3s4f0UlEKJjEB/rZc3aP1r0bnV1dZs3b7U0/L1UKp0756rPPv/StlWdOXP6zJnTrV++vLx82bIfW1M4bf+J1jNOQJ/Q8v4VJitW/FRVJTa3b2rquYqKitZPPSQIwsuvvLb0h29FxodMSIh/LeHlFr3na6+92TZjfL/00qs//viDpZ6rfaKiVq/6ad36DVu2bE1JOVFSUmow6H19/fx8fbtHdh88aODgwYP69Ilqs6mfN2/e8t77H/7j/vuaveQxdOgQS7/KTmvXrj0iz86+apa/n99XX3+bnHy8pqYmMDBg1KiRS+64vcOd/n7//dLp06cltuLo7tyVvAOx47co+8gZjpSusCNefe2NYcOGiE/32qtXz0ceftBBBbh+w8Y1a9Zs3LAhOflYSUmJXq/38/Pz8/fv0aPH0KHDhg4d1q9fvw5UkwmEXYJxNsKOe/egj4/3uHFjLT2r1+vXr9/Y0vdcs/YPkfnQ5s2bY3MgbKnXX3+rpKSkLcuz7T/RZmq1+uNPPhNfRqvV/r7mjxtvWNz6j0tJOfHeex88+OAD9lr/FSt/2rrtz7Ypq7Opqa+9/ubTTz1paQGZTDb7qlmzr5rlJDv3k08+c1MoWnqvYIeQnpEh3to8cuSIkc2NEuz89Hr9008/u+LHpdb0DDdXX1//229rrrlmQaev5B2FHb9F2UfOcKR0hR2RnZ397HMvvPH6Kw4KXVYUoMu8efPnzZvfOWop9xCiA7hq1ky5XG7p2d279xYXF7f0Pfft2y/Srb9Hjx4tupin0Wh+/XWVDZv2185d4necO88ntj2dTvfEk09ZMxzLN998K96KaL3Pv/jKXgOI/bVz10svvdqWJbZ8+YpPmsvPTuWdd99//vkXxcdZ6aDe+t87BoPBhhPHn3/+tQNtZlpa+sMPP9qiNnCdTvfEk08fsXXc3Q5XyTsKO36Lso+c4UjpCjtiw4aNL7/8mg3ftBQggdCxGt9W1y6sb/SzuXmwjbd03nx79hc1nXitW7fe5g9t7IX/vLRt2/YWveTkyVOPPvq4zcXS9p/YlvR6/VNPP2flBubm5j3z7HP2yhX/+c9Ln332RSt/Y9asWfvAAw+1fdR57/0P//vSKx0oYq386efF19909uzZTvZzcPjwkfc/+Kilr/rvS6/s2r27Y23pXzt33XPv/eJzw5hUVVX944GHNmzYKDIqryAI9aIVuMNV8g7Bvt+i7CNnOFK6wo5Yumz5vx59QmTeFGoygdDxVyacYAgZ6zl6MnrHlUafqKiY6GhLz9bW1m7ZstXGU3bRJDlzxnSFwtX6d6uvr3/o4X9Z37i0Z+++2++4qzVXZNv+E8V9+90Pf+3cZcMkhI2lpaXfetuSNWvWWv+STZu23HrrHXbJFQaD4Z1337/7nr9nZ2fb8PLS0rKnnn72iSefbptbBxtbtuzHxdffdOxYcmve5OzZs6+8+nprpnKy3qlTp69deP0L//lvQUFha96nqKj4o48/zc7JcZJv3U8++ezTTz+38sqCRqN5+unnfvxxZUf8Ndy3b/811y7644/1IhtrMBi2bN12zTXXGed3UanExuhr9vSuw1XyDsGO36LsIyc5UrrCjtiwYeOCqxft2uWoS2l2KcDTp0/95z8vvPrKy05bObmHEM5OvKVuy9ZtNl8ZSkk5kZ6RYWmoei8vr0mTJrZofEitVvvCC//966+d/3rk4cjI7pYWq6io+PCjT5YuXa7X61tZOG3/iSLWr9+wfv0GDw+PMWNGjRw5YsCAxN69erVoDH2DwXAs+fiPP65Yu3adDYOgHj2WvODqRUMGDxo7bkxcbGy3bt28vJSenp62jeO/e/eeOXOvXrBg3vWLF/Xp08eal+TlXVix8qdly5Y7LnVbH7FuuPGW8ePHXb/4ulGjRlhZAgaD4eSpU7t27t6yddvx4yltucI6nW7Fip9++WXV5EkT582fO3zYMOsvx1RVVe3avWfTpi2bN29xtuu47773QdLRY4/+6+GePXuILLZ//4GXX37tbGpqx/2iLigofOzxJ9//4MPZs68aNmxor549vL29dTpdeXlFWlrawUOH161bn5aWblo+JCTE0lvV1tY2OytJR6zkHYJ9v0XZR85wpHSFHZGdnX33PX8fPGjQDTcunjRxgshNRiZ6vf7AgYO//LJq0+YtjivAEykp23ds37Rx47FjR528Zko8VQGd7GBz9/Rts89q46kXWqTZJsHWDCfjzBvuOHcuud3ScCMajWbQ4OGmP6VS6ehRIydOmhAfFxcREe7p6Vlfry0sLDh16vT2HTvXr99gZYht+0+0L6XSMz4+vlevnt0iIiIiwsPCwpRKpYeHh7u7u6urXKvVVldXl5SUXrhw4XxaenLy8f37DxQUFDjhru/Zs8fo0aPi4mJ79ewZHBykVHrJ5S5arba6uqagoCAzMzMl5cSevftSUk447mYGm/n4eI8aNTIhPj6qT1RYaKifn5+bm0IikajV6qoqdXl5eUZGRmrqubOp544cSXKS0Ybc3d0HDx4YGxvbt2+fsNDQ4OBgT08PNzc3vV6vVler1VVFxSXnz507m3ruRMqJI0lHHTqHSutJpdJx48aOHTN64MABgYEBKpVKq9WWlZWlp2ccSTq6adPm06fPCF3MihVLLXX9OHv27IKrF3X6St7VsI+c4UjpCjvCw8Nj5IjhiYkJ/fr1DQ8P8/f3d3d3l0ql1dXV5RUVmZlZ51LPHTmStGfvvoqKitbU5F69IsPDw/39A9zc3CQSoapKXVVVVV5WlpaWdubsmTNnTh86eNCGES4IhB0yEDpzNHJcIOyaabBF8azjfiIAOFp4ePi6P36zdJX9559/fe7fL1BKAEeKM6tRl3amzeEewi6qQ8w2AQDofO64/VaRPlc7d+2iiACOFBAIOzYnGWuUrQMAONpHH70fFxdr/fITJ45ftOhaS8+Wl5cbx9IAOFI4UkAg7DCctrekSBugfZsHu0h/UQBAY8OHDV2+7Pt33nlr1KiR4jNEy2SyW2656X9vvSGy2A9Ll9fVaShVcKRwpKAtMcqoQ0x/5EynjEk0DwIAGps8aeLkSRNzc/P++mvnkSNJp06fLikpLS8vd3Nz8/LyiorqNXDAgHnz5ogMmSgIQm5u3ldffUNhgiOFIwUEwo5nw5t9O1BSonkQAOAIYWGh11238LrrFtrw2vr6+scef7JdxkMGOFLQxdFl1FE6X2MazYMAAEfQarWPP/F/SUlHKQqAIwUEwo7KORvKGjcG0jwIAHAq2dnZS5bcvXHjZooC4EgBgbCz6UxNajQPAgDsS6/XL1++YsHViw4dPkxpABwpIBB2eE02l7V7jjJvErTjTPQCzYMAAEG4duHiDz/65Ny58y16VW5u3vvvfzhl6owX//syd0OBI4UjBe1L4qkK6GSb5O7p214fbSn+dejs1Ck3CgBgX4GBAUOGDI6Li+3erXu3bhF+fr7u7u4KhaKmpqaqqqqysqqsvPzsmbPHU1KOH085fz7NYDBQaOBI4UjpoGrUpQRCAmHL4lPnC4SkQQAAABAIOwG6jNqZc3YcJQ0CAAAAIBCSCUmDAAAAAAiEzpGvWFsAAAAABMJOxVIzWkdJWQwkAwAAABAI0RUzIWkQAAAA6CIYZbR9wpVz5quOtbYAAABA22OUUbSASI5ytqZC0iAAAADQ1RAIyYSkQQAAAKCLosto+yeu9g1dTrtiAAAAgBPqZF1GCYTOEr3aPn052/oAAAAABEICYacNhM4Tw4iCAAAAAIGQQOikmdBxkawdPxoAAAAgEBIICYTWBjN7JbS2/CwAAACAQEggJBDaP6q1KLA57p0BAAAAAiGBkEDYnrHQvoiCAAAAAIGQQNjlYiFREAAAACAQEgi7XCwkCgIAAAAEQgJh10qG5EAAAACAQEgg7FrJkBwIAAAAEAgJhF0lH5IAAQAAAAIhgRCdx61L7gkJDRME4ccfvklPO0eBUOBgn3Z6k6fNHDJspCAIu3Zs27ljGwUCAARCu3Nhj6LzcffwiOrTr1fvPgFBwZ4engo3RU11jVpdlZebcz71zPlzZ7VarZVvFdE9Mjo6LiQs3MfHV+Gm0OsNtTU1tbU1anVVQf6FC3m5F/JySktKBcFAsQMAAIBACLQnudx12MjRw0aMdnV1NX/cU6n0VCqDgkMSBw6urKj4a/uW5KNJ4ikuICBwxuz54RHdzB+UyQS5XO6lUgUKwT169jY++M0Xn1zIy6Hw0Y7uuvcBP/8AQRC+++qz3JwsNhMAABAI0eV4qVQLF98cGBTc7GKz5izoHdV3zeqfLTUVhoZFXHfjLQqFG6UKAAAAAiHQ/r754mPxmHfz7X/z8lIZ/6ytrUk6fDD1zKnS0pK62lp3D4/AoOB+/WPjEwdIpTJBEPpFx7p7ePz4w7d6va7hUeEin3f1QlMazMxIO5Z0ODcnu6qyQqfTu7u7u3t4eHh6BgWFhIZHhIaGGwz6LljgYJ8CAAACIeAUJBLp3AULTWnw7JlT635fVVNTbVqgqrKyqrIy7Vzqgb275i+8PiAgUBCE7pE9x0+asm3zhgbv1j8m1tvn4tBEO7Zt3rNrh/mzanWVWl0lFAqZ6WmUPAAAADo0KUWATmDIsBER3SKN/z9z6sSqn5abp0FzxcVFy779sqS4yPjnsBGjQsMiGixjujmwsLCgQRoEAAAAOhNaCNFhWBoxXyqVDR0+yvj/qsrKP9as0uvF+nBWV6vXrP7l5tvvlEikgiAZPmrMqp+Wmy+gVHpdDIT5Fxy3Ofc/9Jinp1IQhM8/ere4uMjXzz8+cWCv3n28VCp3dw+9XvfGyy+YLy+Xu8YlDOjVOyooOMTdw1MQhJpqdV5e7tnTJ0+mJDfe5NvuvDc4JFQQhM0b/jh0YK/ImvTp2//qRTcIgqBWV334zhumt7JmioKWrtWwEaMnTpkuCMKxpMPr1qxq9G7yBx/9P2Of3qLCgi8+eb/xJ5q2a+m3X2Zlpps/5empjEsY0LNXlH9AoJu7uyAINTXVNdXV5WWl6enn08+llpQUt3Glbelednf3iIlL6Nmrd1BIqIeHp06nrVar83JzUs+cOnkipXHnZE+l8v4HHzN/5Obb72qwzJ6d23f8ucWafdpgbVXePgMGDu7dp5/K21sul6ur1NnZmUcO7c/OzBDZZIlEEh0bHxufGBQc4u7uUVNdXVpSfOpUSnLSkfp6jW2TKLR0Mx19cNmxuIxlFh0TG5swIDgktHGJNVMyzlfnAQAEQqCt9enbz0t1sbPo3t1/1dXWNvuSvNzsM6dO9ouOFQShb79opdKrqqrS9KxWd3GkGVPHUUcbNmL0uImTZTLz41FivkBsfOKkKTM8PD2vOIv19lF5+/TrHzN67MRVPy8vuDK+Hj+WZAxOcQmJ4oEwNmGA8T8i575Nv7Dla5WRft74n8gePRu/YUT3SGMaFAQhIDDI01OpVleZL+Dm5h4UHCIIglZbn5uT3WBlps2c7eqqMH/Qy0vl5aUKCg7p0y9aEIS333jJmurRLnvZ01M5auz4xIGDzReQyWSurgofX7/o2PhR4yb+unJZcVFh26xt4sDBk6fNlMsvj9ar8vaO8Y6PiY3fv3dX447Wpq1YsPB687F5lV5eSi+vbpE9hgwdufqXH52t2G2rxvYqLkEQ3D08FlyzuFtkDxtKzPnrPACgQ6DLKDq8yJ69jP/R6XTHjyVZ+aqkIwcvnhtKJN3NzsYEQSgqLDD+Jzwion90rKPXf9DQ4ROnTL/yhFWQSC6fs44eN3H2vGsanLCa8/Xzu+m2u0JCw80fPJFyzJjuQkLD/f0DLL1W4eYW1aevKUNav9q2rVVB/oXamhpj2Pb28Wm4K3v0uvLPhqGxW2QPY8nkZGXpdJdHiO3Rs/fseVc3ODN2Ks3u5THjJw4aMrzBAub8/QNuuvVOlbd3G6xtwsDBM66aZx5vGkSsAYOGNFmXFt98e4OZWszrw8Lrb1apvJ2q2G2rxnYpLkEQXF0V1990e7crv3+sLDHnr/MAgI6CFkJ0eKa7Bwvy8+rqrL0WnpOVqdfrpVKpIAgR3SNPpCSbnkpJPjp85GhBkAiCZN41i2JOnzp1MiUrM72yosIh56xDhguCkJebvW/3zuyszOpqtcFweYLE/tGxY8ZNNP4/Mz0t6cjBnOysanWVIAje3j69+/QbMXqsu7uHXC5fcO3izz56xzSRRrVanXY+tXdUX0EQ4hIGbN+2uclPj46JN54uFxYW5F/Is3KdbV4rg8GQmZnet1+0Mf4dSzrcOAHWVFe7e7gLgqR7j17m+8U8IppaGo1GjR1vbPZRq6v27NyRkXauvLxcp9O6u3t4eHqqvH169urds1eU6MSTDk4monvZpLioMPnokcyMtLLS0rq6WldXRUBgUHRMXOKgITKZzM3dffqsuSuXfWdaXl1V9eqLzwr2nqBv2IjRgiBkZqQd2LcnNzurtrbW09Mzqm//8ROnKNzcBEEYM37SsaQjDUbonTRlhnG4JuNr9+3emZuTrdXWe3v79I+NHz5yjKensm//GBvWx+bNdNDBZZfiEgRh4pRppmlysrMy9+7akZOdpdXW+/j4xsQnDh0+SqTEnL/OAwAIhEAbMXXsvJCXZ/2r6uvrS0qKjeevDbqGFhbk79m5Y+SY8YIgCIKkT79oY+ermurqvLyc3Jzs7MyMnOxMS2eHNjhx/Nia1b80vkNMLpdPnTnb+P/GtwIWFxcVFxedSDl24y1LfHz9VN7eCQMHHz6wz7TA8WNJxkAYE5e4fdsWoalzw9j4xIsx2OrmwVauVWZ6WpOBUKFwM/ZxPZd6JjgkNDAouEGDoSAI3S89kplxxRCvppGBfvzhm8KC/MtBQl2lVlcVFuSfO3u63Suqpb1sVFlRsernH0+fTDF/sLa2JjsrIzsr40RK8vU33yaTufTqHeXn598GN4Yd2Ld766YNpjpTWVlx5ND+/At5N912p0Qi8fRURvbsmXYu1bS8n59/woCBxv8fPXJo/drfTK8tLi7atWPb+dQzi2+63dXV1UmKvZXVuJXFJQiCj6+fqeXwxPFja1b/bAqrRUWFO7ZtPn/u7HU33OLiIm/yEztEnQcAdAh0GUUHr8FSmekUs9bCyKKW1FSrjf9xd3dv8NSOP7dsXL+mQXuju4dHr959xoybuPim2+5/6LFpM+eY7l1sjcqKivVrVzeZE+ISB3p4eAqCcCIl2dJ9gFWVlZs3/GH8f//+V3RwTT1zynj7kMrbu3tT3dJ8fH0junUXBMFgMKQcP2rlCrdyrUyNe90jr+gR2i2yh0QiNS5gXMbH11fl7WNawMPDMzAwUBAEjUaTl5tjelwikchkMkEQ9Hqd3W+xi41PfPzpF4z/fP38HLGXjXbv3N4gDZrLyc48cuiAcXN79Ipy9GGVfyFv2+YNja8g5OZkpZ2/mGpCr+xFmTBwsLHBqrysdPOGtY1fm5ebs3P71jb+fnDcwdXK4hIEIXHAIGOJVVZUrF/7W+MW4+zMjF1/bW/yEx1a5wEABEKgI1EoLt9Co9FoWvRa0/Kul+agN3fk4P6P3ntry8Z1OdmZjYdaUSjcBg4e+rf7/mlqYbNZ8rEj9fX1TT4V1affxWWu7FrZQNr5c8azybCIK6bQ0Gq1py5ljCbXMzbu4oPpaeeqKiutXOFWrlVRYYFxqBill5ef2c2N5t1BMy7N8Wh+G2H3Hj2NJ9DZWRnme8RgMBjnEZFKZcNHjW0wZIiTENnLVjINomNsR3Woo0cONtmjVRCEnKxM43+UXldcDTHF+6TDBy01nh89cqiVheA8B1cri0swu/k56chBS6OJHjm4v8nC7BB1HgDQUdBlFB2bRlNn+n9Le6OZltdYuPOwrrb24P49B/fvkcvlIWHhoaHhIaFhEd0jvS6d27m4yGfPu0ZnlrtsYDplbCw8orvxP4tuuPnSYxfP/MzGxbj8P5nMRaFwM2/YPH4sKXHgYEEQ+kXHblq/Vqu94uTYlBJbNJxM69cqMyM9OiZOEITIHr1Mc0IaO4iWlhRXVlRo6jQGg14ikUb26JV89EjDxJh2vsEqHdy/Z/qsuYIgjJswOSFx4Nkzp3KyMvPycivKy5ykoorsZXOBgUH9Y+PDw7v5+Qco3NxcXeWNz/U9PDwcvbYid5NWV1c3vhYjCBLj6K/GnStytObn5UZ0j3SGYm99NW5FcRlLLNRSfb78FVRXeyEv19iM3+HqPACAQAi0BZ1OV1+vMY7v5+beshNl44RjgiDU1NSIL1lfX5+VkZ516Uw3PKL7mHETe/S6OH/91Jmzz6WebXbGMEvMZ7wwJ5e7mk4ijX0prUy55ues2VkZZaWlPr6+CoWiT7/+J83GaAmP6Obr5y8IgkajOXv6pJXvb5e1ykw/fykQ9jxyaL9g7A4aFCRc6lBaV1ebfyEvJDTc/DZCSzcQCoKQdPigp9Jr9NjxEonUx9dv6PBRxqkpq6oqM9LOnzxx/HzqGUttOG3D0l42L6Lps+bGxCVYUZgOH1hSZKICU/dLifTy3le4KYw9GAVBKCsrEXnn0tKStgyEDj24bC6uhiVWKlZiZaUlTQZC56/zAAACIdBGysrKAgODhBZ2pZPL5X5+/sb/l5eVtegTc7Izf1z6zYyr5hkb3zw8PPv063/i+DEbM62F/nVubm62vF2jvmMpyUmjx00UBCE2PtE8EJqaB0+fTLG+I59d1urK2wglgmAwdQc1dRbNSE8LCQ03distKS7y8lIZ91ddbW2TDTK7dmxLST46YNCQ3lF9AwIDje+mVHrFxifGxicWFRX+8dsv5nceWikl+WhK8tHW11Kd6BBEEolk4eKbrUxK5rMmOAnzxvl6Tb3otRVNW66Yow8uu5SYeF93804QbVPnAQAEQqCDyc7MMAVChUJRV1dnzavCu3WXXrpmn52VYcPnbtuyIT5xgHEi9fDwbjYHQssngpdPEz9+/3/lZaW2vc/x5KPGQNizV5RpqneZTBYdE2/KPG28VqUlJRUV5SqVt7uHR1BwcEH+hUvdQQ2ZlwPh+eEjxwiXupV2v9RfNDMz3VK7R1lpyZ9bNv65ZaObm3toWHhEt+49e0cZB2MMCAi8/ubbv/vqM/PxGJ1HfOJAUxrMzEhLST6afyGvsrJCU1en1eqMo5X07Re9YOH1znkMmtcKuatcJPVZmqyvHVe4NQeXXVbA1dVVpMTEG4Q7bp0HADgPBpVBh5d5qblJJpPFJgyw8lWJAy8O+G4wGBp3QbRGXW1tWenF80iRia1tVldXa5p73TRZmQ3KSktysjMFQZBKpdGxF0Ng76i+bu7ugiBUVJSbGuXacq1Mwc84GImxO2hhQUH1paFfszMzjPO2GbOiqe+oyA1XJrW1NWnnU//avvXbLz/98tMPjJM0yOWu4yZMds46HBN7sado0uEDy7776ljS4fwLedVqtVarNY1d6e74Wwdtr6u1daZJ9nx8xMZi9fX1c4oVtlM1bk2J6XSXSky0THysK7EOV+cBAARCwG7OnjllGiFzxKixCkXzncFCQsP79Y+++PLTJ60fYLMBU3OHg8ZOzM2+OLBkP5um8zY5fuxiG2DcpcBsSs4nko8KLZy72i5rZeo1Gtmzl6k7qPl08/X19bk5OcKlwUVNg1i2NL0XFuRv/ON302c5Zx32C7g42uohyzPdhYV3E3mH9r5XzFCQf+FSwu9haSFXV9fg0LBWfYzzHVytKLGLPZ/Nh9JtQKFwC2l5iXWIOg8AIBACdqPT6Q7s2238v5eXasbseeKjRLi7e8yed7VpmX17dtr2uUHBIaZ5CMsc0+Us9dLU0jFxCaZRHG1w8kSysT0kOCQ0ICDQzc3dOGG90MLxRe24VqYWwm7dI03D8zRoqzS2/bq7e/Tt19/bx0cQhOpqdWFBQUs/q7S02BTgjV18nY380uTjplajBrxUKlPrbpO0ly5JyOXydtkE075LHDhEJmv6ZoTEgUNauXp23Ex7HVx2KLFBFotl4OChLi623Nnh/HUeAEAgBOzp4P49OdlZxv/3j46df80it0ZzzRv5+flff8sd/gGBxj8P7Nttmt7NZPK0maPHTVQqvUQ+0VOpnD3vGtOf5y6dXNpX0uGDNTXVgiBIpdJrr7tJpG+bm5v7uIlTYixkhrra2tQzF9cwNmFAdGy8cYTDvNyc4kuzPrTxWlVUlBsHV1Qo3IyjIxoM+qwrZywwnTGPGT/pYkTMSG/cSuTn5z/36kXmUxo20D86zvif6mq1qWejU6msrDD+Jz5xYONnPTw8r154g3gEMt4aKgiCf2Bgu2zCsUuz+fn4+k6dcVXjAVhCQsNN+9FmdtxMex1crSixQ8bKrFJ5T5s5p/FYQeER3UePm2Dpe6yj13kAgPNgUBl0Bnq9/rdfV9x8+9+MKa5v/5jukT2PHD6QeuZ0aWlxXW2dh4dHQFBQv/6x8YkDTaO9Z2dm/LllU1Nhz2vIsJGjx07Iyc48l3o2Py+3uKiwpqZGp9MqFG7+AQG9o/oOHDxMcWmgwnOpZ0QmImsNjaZu0/q1cxcsFATBS6W6dcndyUeTTp9MKci/UFtbI5fLPZVeoWHhvXr36ds/xsXFZf3a1Zbe6vixpH7RsYIgxMYlmuLH8eSkdlyrjPQ04/1RxnPxC3l5Dcb0z8nO0mq1Li4uppP1zPQmbiCUSCTRMXHRMbFZGRmnT53IzsooLy/T1GncPdz9/APiEwbGJw4wLnn29CnnrMDnz501buPI0eO8vFRHDu0vKS6ur6/39vHpHdV32MjR4pcnBEEoyL/Qq3cfQRCGjxhdXFSYl5MtPnal3ZUUFx0/lmTsk5w4cLCvr9/ePX/l5mRr67XePj7RsfHDR45u/YgydtxMOx5ctiktKTl65LBxpOK4hAE+Pr57du3IycnS1mt9fH1j4hKGjRhtqXmwE9R5AACBELCzivLy7776dOHimwMCgwRBcHN3Hzl63MjR4ywtf+b0yd9//Unk2rlEIonoFhnRrZmZAIqLi9avWe247TqZkqxSeU+YPFUQJDKZy4BBQwYMGmJb5KiuVnt4eHqpVMaernq9znwWirZfq8z088az4Uv5sGHY0+m0OdmZ5lMRio5/I+kW2aOb5RvY1FVVf/25xTlr74G9uxMHDDY2a8clDIhrNDaSXq9LOnxw0JDhlt7h1InjI0aNFQRB5e2z+MbbzJ/as3P7jjbZ8C0b14WFRxibrbr36Nm90a1xanVVTlZm3/4xxos4NnyEfTfTXgeXzbZtXh8W0c04SHJE98iF3W8WKbFOVucBAM6DLqPobJlw987t4nOdVVZWrFuzatVPy7XaVo4EY0g+euSHrz9vds7xVtq3Z+dPy38wjWjapJrq6u1bN4lMfaHX6xvEv3OpZ2uqq9txrRrdMZgmvkxVZWVJUx1ci4uLV//8o/jY+nm52d9/87mpw6GzUaurfvrx+2q1uslnq6vVv65cni46vGr+hbz9e3e171bU1tYs++6rxn2wjUpLSlYu+66mpsb4p5XTwzh6M+1ycNmsrq5u+XdfWZr2pqy0dOWy7yoqyjtlnQcAOA9aCNGpaDSav/7ccnD/nj59+/fq3ScgKNjTw9NV4VpbU6tWV+Xl5pxPPXMu9ax4FFz3+68H9u4OCg4OCg7xDwj08PB0c3N3c3eTyVzqNZrq6uqiwvyc7KyTJ5IrysvbZrvOpZ45fy61b//oXr37hEd08/RUuioU9RpNRUV5Xm7OudQz586etjQeicnxY0mDh44w/7N910qtrioqKgwICBQEQa/XNXlanJl+XhAujptveXxRw6mTKadOpoSFd+sfE9ute6SPr5+rq6K+XlNRUXEhN+f0yZRzqWfbfyROUTnZWZ9/8t7goSOi+vTz9fOTyVyqq9VlpSWpZ04nHz1SU1Pdp1+0+Dts27whI+18fOLAkNBwT6Vnu8z4V1VV+f3Xn8XEJcTGJQYFh7i5u9fUVJeWFJ8+eeJY0uH6eo2nUmlKj7Z9hN030y4Hl82qq9U/fPNlTGxcbMKA4OBQdw/3muqa0pLi06dOHEs6pNFo4pqeSqcz1HkAgJOQeKoCOtkmuXv6sl8BwOl+byTS+x961MPDUxCErz770DRTBQAAHUuNurQzbQ5dRgEAbSEmLt6YBjUaTVFhAQUCAACBEADQJQSHhE6ZPsv4/5MpybYNKgMAAOyOewgBAPZx/U23X7iQm5WRXlZWWq1W19bWuCoUAYFB/aNjEwcOMU6ioNNpD+zbTVkBAEAgBAB0Kj6+vt179Bw2YrTIMts2bywuKqSsAAAgEAIAupC6utqtm9YfSzpMUQAA4DwYZRQAYB/ePj59+kYbZ0Fw9/Bwd/cQBENNdU1hYX5G2vljSYdtnm0CAADn0clGGSUQAgAAAEAXDYSMMgoAAAAAXRSBEAAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAACAQAgAAAAAIhAAAAAAAAiEAAAAAgEAIAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAEAgBAAAAAARCAAAAAACBEAAAAABAIAQAAAAAAiFFAAAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAABAIAQAAAAAEQgAAAAAAgRAAAAAAQCAEAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAKfnQhGgE/MOie+WeINP2CA3r2CZ3MP0+JHV9xWkbqZ80MX1HnFf1OgHTX+W5Rzet3wxxSIIQlDUlIHzPjT9qauv2fxuIsWCrkPRJyT83ZskMqkgCAVv/FG58XjTy0kErylxXtPiXHsGSt3k2uKqmoNpZT8frM8tbXi6GaxyHxDpPqC7a2SAi79S6uWuV9dpMorUu89Wrjumr9FYv25hr17nPjCyPrsk847PLS3T7ePbXHsF1abk5Dz0Q8NNiwpWzUp0i4twCVZJ5C668mpdqVqTUVRzOKPmSIa2qNJ8YZ+Fw/zvmmD+iKFOq1fX6cqr684X1J3Oq9p+WleqbnadXXsFeU3o7zYgUh6kkqrcDHVabVFVbUp21baTNUcznWSnm29s+a+Hij7a0nRyCFZFfnuPIBEEQdAWVWXc8GHrt7pxOQt6g15dp8kqqTmUVr42SVei5qgkEAK26DHkjr7jHpNIaAYHAMBaErks6LGrjGlQfLGQf1/tMbSn6RF5qI98zkDl1LiCl35X7001X7j7l3dJ5DLzR2Te7u4J3dwTuvksGHLh37/UnStw/IYJ/ndO8Ll2mDHMXDwP9le6+CsVUcFek2N1FTXp177XzHsoXGQKF5mfp2vPQK/Jsf5/m1T158nij7fqKmqaXF6qdAt8cLpybD/zD5W4yFw9Fa6R/qpZibUncwvf3qBJK3SqOqCcFFP82Z8Gra7xU6pp8ebb4qitlkqkXm5uMWFuMWHeCwZf+M/qmiMZHJsEQjjW9EfOmP95YMXNJVn7OvR6qoJj+41/XGj2SwsAAJjxu22sa6R/7Ylct5gwkcUC/jHVmAbLVu4vX3VIV1Hr1j804P4prpEBwU/Nzb7/G01G8RUvMBjUu85WbjtRm5KrV9fKQ7y9psV7LxjiEqwKfWVR1pIvLGUqe/G5boTPwmGCINSdKyhbsa/uVJ62uErq4eoWHaacGK0c11/ktRk3fGRsPJS4SKWebi4h3u5xEV4zE1y7+3tNifUYFJnzr+X12SUNT7KDVGGvXScP8xUEoeZoZsUfR2tTcnRl1VI3uTzCVzkh2mtGglt0WMDfp+T+a5nzVABtcZWLv9JzZFTVX6cbBWKJ17R40zJNR4tWbPXlcnZ1kYf6qGYles8bJFW6hTy3IPP2z6xpjAWBELgsPPZq8zRYW5l3eNU9VYVnDAYdhQMAQJPcYsN9rh2qLaoq/mxb+P9utLSYa68g1fQEYxos/uxP44M1RzNzH13e7bMlMm93vyXjLzz7i2n56oNpxZ9vr8+6HBE1GcXFn/1Zl5of/OQcmbeH9/zBJd/udNx2SeQy38UjBEGoO52X89BSU9uXTqNV70lV70kt+XaX361jmn0fg1avK6/WlVfXnc4r++WAz6Lh/neMl/kpQ1+8Jvveb8z7vkpcZCHPzJOH+Qp6Q+F7myrWJpme0mm0uhM1tSdyy385GPTYVc5WB6o2p/hcN9xrRnzjQOgxKNIlWKUrqao5lO41La6JcrbTVhs0Wk1GUdFHW/TqOt+bRkk9XFUzE0qX7uEIdRB606Fz8gqMNv8z98RvlQUnSYMAAFg8KXSTBz06S5BICt/ZoFfXiSypmpEgSARDXX3psivO0XVl1eWrDgmC4Dk8SuZ3uQXpwnO/mKfBy9lj28n6C+WCILgldnPoprn2CpJ6uAqCULH2aJM9IeuzS/L/+1vL3tQglP24r3T5XkEQ5GG+qnmDriii2QMU/UIFQSj5fpd5LrriQy+U5z6xouZgmlNVg4qNxwWDwWNwz8ZtgF4zEgRBqNyUYtDrm64Y9t7qsl8PXrxUERPOEUogBFrGxU1l/qemupAyAQB0BarZA3pvfKz3xseUE6MbPCVRuHT79I7eGx/r/sUSqZu8wbN+d02Qh/lWbk6p3ndO/CM8hvcSBKHmWJa+qmFuVO8+KwiCIBE8h/WyZm11RZWCIMg83Rx7vuvuavyPXqO17zuXLt2tK68RBMF77hWB0OeaoYIg6ErVZcvF7sExaLTGSOk8dEWV1YfSBanEa+oVbYBSLzfPUX0EQajYkGzptXbfan1lrbHdVap049AmEAItI5FccfegwaCnTAAAXUHFmqSqrScEQQh8cLo8ws/8qcD7p7r2CDDU1V/4z2p9bb35U+4DI71nD9SVqi0NL2keruQhPoIg1J250PhZTXqhoU4rCIJrr8Dmf6xlUnk3P0EQtIUVDi0TbUG58T9WxlTrGeq06l1nBEFwCVDKw32ND7pGBrgEqwRBqPrzVJMNkk6uckOyIAhe0+PNH/SaHCuRy2qPZze+W9JxWy31cjOGeX1VLYe243APocOitkweFDU1oMdY75B4V89AucJLW1dVpy5Ql6YVnv+z8Px2TXVRE/tDoQqLmevXbaQqKFru7iNzcauvq6yrKijPO1pwbnPh+e2CYGjwEksDx4f0mxURv9ArsL+LQqWpKSnPPZJx5LvS7APmr42d9t+I+IWNV2Poou/M/7xw+o+jax40f0Qm9wiLnusXOVIVFOPq7ieTu9fXllWXZRZn7M5OXllbmdf4PdtmPUtzDkZPerbxktGTnjU9rqku2vbRqFYWu6UtkroouiUsDu0/28MnUu7uU5C6+cjq+8xiqiw87urQ6LleAf1kcvfaqvzijJ0Zh79Rl6RZOcy9DSVvpSY3x7jCYTELPP17u8g9jCucfujr6tL01peGzZsjdVGE9p8d2HO8MqCPQhksc3HXaWs01SWampLq0vSKgpOl2Qca9xC27VXiRt68ShUUY/rz0M9LitL/Mv3Zc+idfcc9Zvpz97dzKwtPmf7sN+HJHoNvN/2Ztv/TM3+90S7VUuRLLHHOu0G9J18+79Hrjq9/Ivfkart/FYisoSN23OXjMf6a0Oi5Xv59ZXL32qoLRWl/ZRz+prqsBWPZtagEQvvPTrjqLdOfNRU5Oz6b1Hg/BvedMWDOu6Y/a6vyd3w6gR7vaJHCdzYq+obII/xCnp2f/Y9vjQnNa2qc8RS/8L1NmvQrTkKkHq5Bj8wUJELhe5v0lc2cebuEel+cdSC/qRRnELSFFfIIP+OwIuKUE6Nl3h6CIKj3pDq0QOpzy+pO5yn6hSonxRjqdeWrD9edy2/qS9QWtSdzVbMSBUFQRAXX55QKgqDoH3rxqRM5HbH+qHed1VXUyMN93eIiao9nGx9UzYgXRJsHHbHV3vMHmwqZ45pA2MGE9p/df+L/uXoEmD8od/eRu/soA/oG95lennd079IGCUfSY/BtUaMflMndr7jc4u7r6u7rFdgvImGRuuTcsT8ercg/3sxOdVUmXPVWYK8JpkfclMFufWcE951xdueb5/d90sqt65Z4fd+x/3JReF2xnh4Brh4BPmGDeg67O+3Ap+d2v9dso5yj19PKc0J7FbsgCG5eIYPmf+IVFN30lTMP/8FXf6YKvtwBw8Onu4fPDWExC1I2PaOrr26zkreSq7vfwHkf+oQParDC4XELT259PvvYitaUhs2b4xXYf9D8j91UYQ3qkour0sOnu0/ogLCY+YIgHFv7UN6pta18VbOKM3aZB0K/bsPMA6Fvt+HmC/t1H2EeCP0ihjV4q3aplhbToItiwNz3A3uOv3yRQlt79Ld/FKZtt3uFFFlDB+04QRAUnoGDFnyqCo41q96R3QdGhsddk7Lx/3TaOkd8Geaf3aCpKXF1v9hi464K9+s2vCSrYb+p8Jj55n/mJK8gDaKl9DWaCy+sinjvFtceAYH/mFbwxh+ukQGBD0wVBKFy4/HG8woG3DfFJUhVtf2UeueZ5r8fPBQXP8XCfYbGx4337ImdBvgr/f82URCE+txSi1Md2k/+q2vDXrvOJcDLa3q81/R4fWVtXWp+XWp+7YmcmkPpDdpLW8Q0S55UdfFL28XX0/ifBhMbOoJbdFj4OzcJglD82Z9lK/fb5T0NWl3V1pPe8wepZiQYA6GiT4hrryB9jUa9/ZTFHWq/rZbIZfJQH6+ZCcZAqK/RVKw7ynHtOHQZtb9+E55MuOqtBmmw2ZofP+u1fhOebHD+14CnX+8RN6wwP0Vr6jTOdeD8j8xTlrk+Yx72jRjSmq2LnfqfmCnPNzgBumIFZPLeI/6ecNVb4lM+OHo927jYL27RvA8bntRe6rkqk7sPXfSteRo0kcnd42e+GtBjbNuUvNV5wHXg/I/M06D5B8VOfTE0eo7NpWHz5khlrgPnf9QgHjS/LTa9yspAaP6neQKUSGS+4YOvCIRmCdBFoTIvHJ22tjT3cNtXS0tkLm6D5n9s/ub1teUHV95mngbt+VVgYQ0dt+MuHY+xFo7HN5o9Hm0rAb2uPuf4L+bLhMXOb3whJqDnuMunZQZddvJP/LDCBpr0osL3NwmC4DUtznv+oOBn5kkUck1GUeF7mxp+n4yI8poWpyuvKXp/s1W/na4uptjQdJyo1wmCIFGItTpIFC7Bzy2Q+XgYtPr8l9e0Qb/K+uySrLu/Klu+15jfpF5u7gMjfRYOC3luQY+V9wfcM8l0n6EN8ftSVHZt8B99TX0HrT8V648JguA5rp+xWIzNg1XbT4kk59ZvdeTSe423v/Za+0i3z5f4XDNUIpPq1XX5L6xibnqHooXQzrolLDbvBiYIgrrkfOrud0uy9mnrKtxU4cF9pvUccmeDV/UcemdY9DzzR87v+yTr6FJNdbFXYP/+k572CR1w8QtU6pI4591dX8+qqWi6Od4YOdIPfplx+Jv6mtLQ6DkxU56XSE07WtJ94M2l2ReHbErZ+FTKxqcEq+f3ixx0a0TCdeaPpB/8IuPIdxp1kU/4oLhpL7l7RxgfD+k3qyL/eNqBzy0VlOPWM/PI94IgjL5trdK/j+nBk1tfMD7uoGI3bVHDH7xLJ4J9Rj9ovj6CIKQd+Czz8Lea2jLfiKGxU17olni92Fek/UreSsbNObf3w6yjS+try31CB8RMed7T7/KtFzFTni9O36WpKbGhNGzeHP/IUe6qy+OMleUePv3nK1XFZ/V6rcIzyCdsYFDvSUFRU6WyK0ZKsO1V1ijNOaTT1spcLt7p7h0cL5O76+prBEFQBce4uF4xPptvxFCJRGpsLPLrNkwiuXw9riz7oP5Sk1RbVksLYclj0NWfmsfXuqqCgz/fUVV0xnFfBU2uoeN2XJ8xD3v69TZ/5NzeD7KOLquvLfcNGxQz5Xnx47E1JZB97MeeQ5eYImJI3xkntzxvrDNGodFzzL4JhaLz21vTFRxdXOWGZPf4bl7T4gLumyIIgr62Pv8/qw11V5ysy1TugQ9OFwSh6IPNuvJqa97WcGlcFomLrOmwJ5cJgmDsp9r0Ai6ykGfmu/UPFQxC4Vvr6k63USXXV9YWf7mj+Ku/FL2DFP1CXXsGuMWEK6KCJQq599VD3AdG5jyytPEwOc1fdjSNWFOtaRgR3eUdtPJozhfUpeYrooI9x/Wr+vOkcmKMIAiV65OtCsat32qDQa+u02SX1hxKK/89SVdSxeFMIOw4penq2WfMw1d8Fxec3P/jDVrNxasa1aXpafs/zUle2WPIHZdfpVD1GnGv+asyDn11duebxv+XXzh26Kc7xty+XqEMunS65h416oHk9Y9bWo2c4z+f3v7KxZOP5JWefr16DFly+aw0bLCtW6eMGvUP80eyji49vf1V4/9LMvceWX3vqFt+M53o9Brx9+zklfW15W28ntZujr2L3VQOqXverchPcXFV+kYMNZ7syt28IxIWmy+WfezHMzteN/6/OH3noV+WjL51rflZoENL3koZh75O3fX2xU/J2nfw5zvG3L7eFH5cXJXdBtx4bs97LS2N1myOu/cV45Kf3fl2WV6S8f815Vk15Vl5J39zdffrNfxu8y5/tr3KqnMLbV1ZziH/yNGXEprMN3yIsdeo35X9RY3VwCuwf0XBicbPFl1qaWzLammpsg2++nPzluHq0vSDP91unjkdUSGbXEMH7Ti5m3eDLJdx+JvUXe9cPB4z9xz8+Y4xt62Tuigc8WVYXZZRnLnXv/tIU/wOjppmfltm2JX9RbOOLhOAVih8b5PH0J4yX09j5NNkNpz7wW/JeJmfp3r32ao/T1r71Vd98YiTejZ9mBgfN6WjhmlQJg1+eq7HsF6CQSh8Z0Pl5pQWRgXju4j2dDA+azBYChvGzqIXvxMi/AL/Oc09sbtrz0C/W8YWfbi5pYVsmp5BfylR60ov/sclwMvRu7j2ZO65aa856IKCIipYNSNB0OqlSkV9VrH4zYGt32rTxPRoY3QZtaeAHuPk7j7mj5zc+oIpDV6+6FJTeuavN01/BvYcd2VLgiHt4Bfmy2s1VQ3OCYL6TLMUHgRBSNt/xd13FflXfNW6evjbuHU9x7koVObXbs5eSgsXvzgKTxdn7DGPx6H9Z4u8oYPW00p2L/ZLp5K3l2Yf1NXX1KkLL5z+48yO1wRB8I8c3aD73/n9n5r/qS5JK0jd7IiSD4+9evojZ5r8N/q2Zu65Sj/05RU/ORW5+Wc3XFEgvSfZUBqt2RzdlUdTUO9JjfeIpqbk1J8vm5enba+yUsNeo5ca1kzdR8tyD+t1F6/Hm3KgX7cRTb5JW1bLxmQK5ZCFX5unwYr8lH3LFjdogbT7V4GlNXTQjvOPHG26rnGpqn9l/mdNeXa+6Bu2sgQa7EHzXqNK/z7mHVlrK3LN70oFbOA5uo/s0p1dHgMjm7hEEuItCILnqD7Grnqmf90+vXjlOuhfs4yPyLwv/pBp88qNqcw4pGSjMCa4BKoEQajPLW06Df7fXOPsBUXvb6r4o8U3hl2chEC0DcrYd9FSIm2gPrvkwr9/1ZVVC4KgnNDfhkI2DaZiCpmmEVDcosM6buWp3HLCUK9ziw33vXGkIAgVos2DnWarCYRoLZ8rbxnSVBeX5hxq/lVhAxuci9RVFTRYpuzy/UUXTy+8Avo2+W6amlL1lSNAauuuuNYikcokUpkNW9fghqjKwlP1NWUNlqkqvmKUsMaNJG2wntbuLLsWu9GZ7a8a9E3cBdGgQaZOXVhTntVgmdIrP8txJW+l2orc2sqG44mX5yaZ/+kV1F9kH1kqjdZsTknWPvPRNSIH3zbx3j1DF30bO/XFnkPvCuw9qcnrCLa9ykpFVwZCv27DhCtvICw8v73iQrL5hsjdfbwC+5p/UVQWnm77atmYV0Bf75AEs3Lbe2DFTY17Bdu9QlpaQwftuIbHY1VBbUXDwevK84447suwIHWz+SjTft1HuimDL4XDBeavyk5ewZQ5aA15N//Af04TBKHuXIEgCMpJMaqZCa1/W32Npv5CmSAIir4hjZ917RFovHtQc77RDMBSSdATsz3H9hUEoejDLeW/H7Hh07XFlYIgyHyVjedRvHj+IJfJArwEQdAWW9vPUK+uM7Z9yXw8xG99bOLjFC6eY/oKgqAtrKzPvfhVoMkoMg7BqpwQLXHpqCfb+qpa46yS8gg/g07fbFtu59jqrokuo/ak8AxocDJnzasanNPUqZuYjqLxg66eAZbO4xsez3r7zMHaYD1VQTEN7uhrrEGPr7ZZT9s2p5XFbjytN/YGbOqz/BoEwiY+q9F5v4NK3kp11cXNFohEIpO7+WiaWlK0NGzfnJqKnPN7P+o98v7Lpztu3n7dRpg3uFXkH884/G3uidWm0fxte5WVKgtOaaqLTRvlHRIvk7sr/fuYGvpKsvdJXRTGZjfjbYR+EcPMx1kpztht+tC2rJbiDAbdyS1NdHCwe4UUWUMH7biGx2O1VYVsxxIw6LXZyT/3Gn73peNIGhozL23/pxKJNCx6rtliuuzklfywwmYShUvIM/Ok7q71WcW5D/3gf+9k1cyEgPum1J7K06Rd/hnKffzHput5jwBjI2HBG380HgK0et957/mD3BO6SZWKBjfdGVv/BIOg3n++QRoMfny2cnx/QRCKP9lWvuqQbdtVeyLXe+4gQSK4D+phjCsND7eBkRKZVGjh5AcShVwQBINOb2jhzPW+N4ySqdwFQWiwRWU/Hwi4b7LMz9Nn0fDSpXssfq6ri8/VQ5xtbvrL37Hrjhl3WfX+87rS5od16Rxb3QUR353hO7tBP3jrTmssLKVv4l4ag2PWs3kNOtC20Xq2R7ELgtCCgR8MhnYseesTQWteLFYarduc1N3vHll9X0n2fkstJ6rguPiZr/Wf+JT5g7a9ysqCKs68/Jsnkbr4hA82NQfp6mvK846VXhr6yEXh5RUUY6m/aDtXy4Z7STb4mi89fLo7ukKKr6Ejd5ytx6M9SiA7+UfzLTLeN+gXOcp0d6ggCAXntjR58Qiw0qU56LXGOeiLPtysSSs0pcTW5oT1xwSDIFHIfa8faf64zMfDOE+Ael/qFQOBSCRBj8xSTowWBKH48+1lPx+w+aOr96QaI6jvTaMat+ZJXF38bhkjCIK+RmM+hYaid1Dgg9NNvWcbUPQJcU/sLghC3cncFvz6SQSf64b7Lh4hCEJ9dknFlQ2eFWuT6s5cEATB9+bRqhlNN8y6BKvCXlnkPqSn09aimsPp56a9dm7aaxee+8WqitEptroLooXQnhpcVDaNMidOc+WrFJ6BjZdx9WzYM6rJee0dSqNu8SeK39rUvuxe7HqtxXsVNNVXdLprsp9bkyvQ+pLPSfklJ+UXG8pH0dS8KQ3awA0GXX1tWYtLo9UVqSB1c0HqZheFl3dwnKdfL3fvCE/fnj7hg+Vu3qZlIgfdnHnkO/MZxm17lTWKM3aZ3yHmFzFcdWkShbLcIwa9tiz3iF5XbxwM06/bcL/uV/SfLM7c3S7Vsokf/oocmYubqX66eYUMXfT9gRU3VZdlOu6roNk1tPuOa3A8NlnICs8Ah34Z1pRnF2fsDOhxcXoJpX+UKjguPOaK/qJZx5bzqwqbeU2NvTgH/fsX56A3JsOID26RR/gFPjg9/+XfW/Uber6gYsMx1YwEn2uHCQZD+arDusoat/5hAfdPkXm7G+q0JV9sNw9Ogf+c5jU1VhCEki93lK3Y15qP1tdoir/aEfiPqYqo4PD/3Vj6w+7a4zn6qlqpUuEWE+574yhjR9aSr3ZcMU2iTKqaleg1NU7912n17rO1p/J0pWqJm1we7K2c0F81Z6Cxi2OzbVYSmVSqVLiE+LjHhnvNTHSN9BcEQVtclff0zw3mYzDU6y68sCrstcXyMJ/Ah2coJ0VX/HGsNiVbV1YtUchdI3w9J0SrZiZI3V1rjmV1morXNbeaQIgrlOUejhx0i/l5v0/4oLKcw8296kj3gTebx0iFZ2CDC8O+YVdMB6fVqCuLzrT91pmvZ0V+yp7vF3TkndV2xd5g9nA3rxA3ZXBtVb75g03O+NeOJe+mCmu8kt5hA8z/rCw4ZeXNaY7YHG1dZXHmHlPrnNRFMXzxMrPbwyQ+YQMbJ4SWvmry/YfMJ5pL+v2B/DPrGwdC8z/9I0eapjQwToui09aW5x01Tq0Z0m+m0j/KtLC65Jz5vZrt+21QV5l/YstzQxd9b8pabl4hQxd9d2DFzeaZsF0qpB13XIPjUaEMclOFNejE7h060NF1OOvoclMgFASh+8CbgqKmXJEY03fxqwrbuEb6B/xjmiAIlZuOV264PBBIfXZJ4dsbgp+co5wYXXM004YBXcwVvbfJxd/LY2hPn0XDfRZdvs5lqKvPf+l3Tcbluwlkvp6qWYkXL5ndMc7vjnFNxDx1XdqCd6z9Vf39iMxT4Xf7WEVUcMhzjY4+g6Hk213lq5o4+5LIZcpJMcpJMU0kmTpt0Udbqht0czVddVp6b9P5R6uv2nay6OMt+sraJr64Ciqy//Ft4IPTlWP6uQ+IdB/QxKA+tSdyiz7Y3JmqX9fc6o6OLqP2VJS2vcHQ6tETn5HJPRqmcIVX1OgHTX8Wpu3Qaszve5aYz74gCIKLq2eDSQsKzm402PWOO532ii8yuZtP42UK03aYj/uiCo4VmbvZOzRx0PyPzecQa7P1tFJbFntR+k7zecYEQeg+6FbzPz18ewT1niK2qu1R8pFXzqjppgoL7jP9igI5t9XGkrd1c7yComOn/dc0AscVJxPauqqiK24mMY0kadurrFdbeUFdcvkcwjskwcX1Yq+kkux9Df7jHZJgfgNh0ZUn/e3+bVBZePrQz0vMbx108woduug781vg2qxCOmjHFWfsavBN0mDyWHfviOCoKQ6qw5ff5Pw28zuHw2OvNh+LOOvYj23dix6dhUQhD356vtRNrskoLny34Rz0VdtOVqxNEgQh4L7Jrr2CWvNBhnpd3tMrC17/o+Zopr6y1lCvq79QXrEmKevur9V7Uh29maXL92Yu+aLsl4N1qfn6qjpBb9BX1dWdKyj/9VDmnV+W/rC74QWvsxey7vqy8N2NVVtP1KXma4sqDVqdQaPVlVTVHM0s+fqvzNs/syYhGzRaXVm1Jr2oauuJog83Z9zwYcHra5tMgxe/rCpr8/+zOuver8tW7Ks7nacrVRu0en21RpNRVLE2KfeRZTkPfm9+S2fn0DW3ukOjhdCuF0U06rM7/xcz5d/mJwojbvzp3O73SrL2ajVVCmVIUO+JPYfdXVuRa5rhTVtXcX7vR33HPXr57GTI7XpdXVbSUk1NiVdg//4Tn3LzujyQl66+JnX3u/Zd89qKHPNpmrsNuKEi/3ht5QXzIf60dZWpe97vP+FJ0yMD5n2QefibvNN/1Fbk6uqr5W4+yoA+PmGDTW0gJ7f+p+3X09qd1YbFrq2ryDq23Pyks+fQJbr66uxjP9bXlvtGDI2Z8rzI5NrtVfI9htyuq682ztbtEzogZurz5ufcWk1V1tGlNpWG7Zsjkcgi4heGx15deH5b4fltZblJtVUXdPU1rh5+Qb2nhPSbZf5BppBm26tapDhjl6dfr4bXL+pryvOOXQyEWft6j/h7ky9sr2ppSfmFY4d/vWvw1V+Y8ombV+iw677f/+NNxtFx26xCOmjH1deWZx9bYd6bI3LQLVpNVVbS0vracp/wQTFTXhCZhNBeJWDQ67KPr2yyVhj02pzjP/GTChtzWl191l1fiF3ReGdj4Tsbm30fTXpR87PbGYTKTccrNx0XX0pXonbERHn12SXFH1t9XdIgaDKKNBlFFWuSrP+IspX7y1bub/2qas4XFJ8vcPKa06KNLXxrfeFb6+211fYqZxAInUXW0aWefj0jzdp/lP5RiXPeaRRsruielHbgc6/AfqGXx5eT9Bp+b6/h9zZ5onD09wcaTAvWeoVpO8yDln/3kePu2mb6c8/3Vxs7WWUc+krpHxURv9D4uMzFreewu3sOu7vNitfK9bRSWxZ76q63A3qMUfr3MX1W1KgHokY9cPH9Dbqso8u6JV5v6eVtX/IV+cf1em3vkfebj/Fo7sTm55ocX9QardwciVQWFDUlSLQNpyL/eEn2gda/ykpFGbvM+xBe/IXLPWJquyvLPaLXaaQy1wb1qjR7fztWS0tKsw8eWX3foAWfmFa4QSZsywrpiB13duebAT3GmGV4Se8Rfzdls2aPR3uVQPaxFb2G3yORNJy7Jf/sRpsPLgAAWoouo/Z3att/k9c91njyLlGGY388enr7Kw06FjagLjm3b9l1hWnb7b7Oafs/tfK0MmXjUyc2P6etq2iXsrV+PZ2t2HX1NQdW3NpkXtXV1ySve6wk84ob2RuPwtrGJa/Xao6surcst4lJovS6+pRNz+SdbNWABA7dnLLcw0dW3dvSHne2vepigsra17jfZknWPvMdWp53tNEnJjU1r0M7fxsYFWfsSvr9AfONcvMKHWbWd7R9vwpaueN09TUHVtzc5HQXOm1t8rrHrZkOvvUlUFuZV5S2o/HjDCcDAGhLtBA6RO6JVRdO/xHcZ1pAj7GqkDiFZ5CLq1KrqapTF6hL0orSthec29b4LDD94JfZyT+Fxczz7z7SKyha7uYjc3HT1lXWqgvK844WpG4qPL/dQXeVaKqL93w3P3LQrQE9x3v69pC5ekokFi8WZB1dlntiVUjfmf6Ro1TBca4e/i6uSp22VltbXl9XUacurCw4WZ5/vCL/uN3bLlq0nlZmwjYrdk110d4fFobHXR0aPdcrsL/Mxa1OXVCUvjPj8NfqkjTzDmyCIDR5QaGNS15TXbz/xxsi4heFRc/z9Oslk7sbVzj90FfVpemtf38bNqciP2Xnl9O8QxK9QxOUgf0UHv5yNx+5m7fBoNdqqmrKcyryk/NTNxen7zT/INte1SJajbos72iD+cpN9w1eyod7fSOGXhG6Mne3e7UUUXhu67E//pVw1ZumJiw3VdiwRd/tX3GzsZ3Q0RXSoTuuTl2494drwuOuDYueqwzo2+B4FG+QtOMhmXV0eWCvieaPVJeml2TuEwAAaCsST1VAJ9skd09f9is6nIHzPwrqPdn0Z97J34798a+2XIHeI+4zH+uoLOfwvuWL2S8AAAAN1KhLO9Pm0GUUaCNRox7w7z6yyaf8u49s0Epw4cx6SgwAAACORpdRoI14+HTvPfL+ksy9Ocd/Ls05WKcukEhdPP16hfSdETn4dvO+r2U5hwtSmZ8HAAAABEKgc/HrPsKv+wiRBdSl6Um//4OCAgAAAIEQ6EIMBl1O8k+nd7zuDCM3AgAAgEAIwG5ObH4u79Ra/+4jvUMSXD39XT38ZS7uWk1VfU1pZdHpspzDeafW1KkLKSgAAAC0GUYZBQAAAABrMcooAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAKhvXSymSIBAAAAkDUIhAAAAAAAAiEAAAAAgEAIAAAAACAQXsZthAAAAABIGV00EAIAAAAAum4gpJEQAAAAAPmiiwZCAAAAAEDXDYQ0EgIAAAAgWXTRQAgAAAAA6LqBkEZCAAAAAGSKLhoIyYQAAAAASBNdNxCSCQEAAACQI7puIAQAAAAAdN1ASCMhAAAAABJEFw2EZEIAAAAAZIcGXLrgfnX39KWKAwAAAOjKUdBIyj4GAAAAgK6ZFKTsaQAAAADomhnBpYvvb7qPAgAAAETBLrvtLux7YiEAAABAFCQQEguJhQAAAABRkEDY5esE4RAAAAAgBBIIqSsAAAAA0DlJKQIAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAAAABEIAAAAAAIEQAAAAAEAgBAAAAAAQCAEAAACAQAgAAAAAIBACAAAAAAiEAAAAAAACIQAAAACAQAgAAAAAIBACAAAAADo0yfDkzygFAAAAAOiCaCEEAAAAAAIhAAAAAIBACAAAAAAgEAIAAAAACIQAAAAAAAIhAAAAAIBACAAAAADokP4f3+7NNUXQPFYAAAAASUVORK5CYII=";
  }
});

// src/trust.js
var trust_exports = {};
__export(trust_exports, {
  CARD_B64: () => CARD_B64,
  CARD_SRC: () => CARD_SRC
});
var CARD_B64, CARD_SRC;
var init_trust = __esm({
  "src/trust.js"() {
    init_modules_watch_stub();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
    init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
    init_performance2();
    CARD_B64 = "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J+++6KEr/03Xus2r/mnb/d51xVf30KXt+fovbbbTcdSsrFk275rvHqY6uo45/2F6va939RVffYVWecfX6NLe/rev77d+3dIUz7X++57y/eJBPYpXLn549vVfXvLkdU2b0HnsRx4JSr78K3tonTeedfB+p/yguLi+Z9WSeTc88Ld/L1qtC95slxNnvfK8cZO3Xd+zfNnTtz901Wd6Vj9b9PWrz/79pM32NA+uXfbMY1c+eOV/DPStGTNx5uveeQ3wdPdfPrzgoT9QbXk/WqaJpI65l8UrxpbiUocZ4xE5eJKYXJOrUPq2JH8q1WA2NlN1lZWfGkcVbWGXJJgyxmmVoQrtBsjVpq16WS3DxZl2aqchp9g3SPlLUV7C1Yxyqr2+RPnN5VpQTlfXCP+mqG8aNFeDjZgfdKrGwq+zs7Hw6+hoRgKb43BQ+4GD0D/YsGNqsOnhNusfbKDylre9+647b7337jtdmQccdMjGG2/y5z/8BoaQTjvz3NkPP0CLpekVe+979523QUtp+ozNTz79rMFB/MZXvhB/OnnKJuPHj5/35BPxR1OnTT/97PO++j+fhTrp/E98+rsXfm3FiuXuykYbTTjquOO3mrXt888tvvLyS5+aN1df3HyLmce98eQJG03Uv/7mlz/t7+/v7Oo67Ihjdt19z3Vr19x84/Wuva8/4eQddtx56ZLnr/n73554fE5Qne7rQ484Zr/9X/3lL/732jWr3SPb77jL+t6eq/52+YP33xM8Mmr06FPPeNP06ZstW7bk97/5hdYqVU55LbpT9n/1QaNHj3n4ofsvv/Ri+sctOzu7jjzm9bO22W5Ed/f9991z5eWX6IuTJk85+vVvHDtmbF9f3xV/vXjhgvm0in967wevvvLyR2Y/VPw6cdLkd7//w//9758857y3bzlr60Cf//ncf/SsWzdzq1kasY032XTdurULnp5/w7VXLX72GahMmsSD2NnRNaC9wUrfOBibuePU511+A6f5D8nNLC3kGOdo82ANWlgW6OwePXmzV+pLS+bflrJB44/cxXXn+EN2WHnxvcrvLfHoZ9MSFPmy+Y3Tg1M230d1dsNA81yiXc36loDf36WN2XbbbT56/ge3226bSRMnPvf88zfdePNX/vfCZcuWu3tesece73/vu7baasspkyetWLFywaJFP/zBTy7/29+LZh94wKu+863/1cIHz//4RuM3OvaYI3fZeScdmvvlr3/3/R/8RN9z5BGHffmCzxV1vvH44/TPD3700/+54Ku6STvuuP35H/rANltvPWnShCVLlt56+52f/tf/7Ovvb4Kn7r3zpu7u7ot+8Zsrrvz7ueecucceuw0ODF57/Q2f/ewFa3vWHXHYoV/+kin2Dccfq390sdttu81BBx5QXHzPu9+hf/7rs1+46KJf69JOPumE0049adq0TcePG6freuzxJy748tceefSxoqc+9IH3vO2t5+mnjjzmjZ/+l4/vu8/en//ily/6xa+1/qeferKObU6bNu3xx5+49LIr7rv/gZ/+qLGe+dgnPvWXi/9aoKTjn289702bbTZ91KjRzz777G9//6fv/+DHInUK/H/yo++8cu+9nnxy3lve/u73vfdde79ij403njJnzmOf+rfPPPbY40Xf3XfXLc3m//qxxx9/65vP1ZPBYUe8XhfR1dn17ne9/agjDps6ddPBwcGFC5/5ny995fobbzZzjAKNwOmnnbz99tttsvEmzz3/3IMPPfyTn1x01933OI6ddeapRx1xuO7QjTbaaN5TT91++50augULFvJdFsfniOeEP7Rx5LLh3fQdjh7o7xs/Zevxm+606rmH7ShrZI/d8q0lT906dvJWOx780T2OGX/7b96irEt8158/0L9+9ZSZB2yz71v7e1Y+fuu3/P4r2GWN9W6huSqbufspT9z+vZ4VT3sdlK7iwqfv/93YSVvuevi/zb3rZ88+9veBvrVgfdBnH7t67l0/NvcP9ocOOZKCWG5umnPzhUvm36rD8lvv87Z9TvzWNd89tGfVouKjZsk/siUPKOVPWOmnnn/qlvGTttrxkE/sedz4W391rr46Y+c37nnsF59/6tZ7/vqxcZNnbbPvOyZM2+Oa7x3ePGDceGrtyoX3/vXjWpiwyU47v+4T2mO4/7JP6BXjzb96k76444EfGjtlmzv/9B6t4arnZzcRtlRoWh4gcSQDP4Y5WRSk4zwBDCZXPm9ecg7bQT8AABAASURBVP0ikIMn9tYHMcDpFYhyOZAVDqSstNE2iEunlo8BJkVbbItAeojhY84OmfdLMUApHkccUAkmjonrTWCrQZBzi4OLh6BIZ6A5a5L1rUFgC4UQ0pwJVp4EB2Zn2qmdhp7QDwBF3v4gOYkN8tyPSsrVwuMC63f5PN6Z9Tm49xfsOCU2LRjRzTp93hxrnV0j+vv7WMMadxeBvmaQsKu5GhzR2RQa5wmN1gMIA4PYMaDWN0amXkoZWwByhPCm66+BDZxee+gRLS8IZ2651YL5T+mVj/jpjjvu3NHVKS4IhyudfPo599175x9/++stttzylNPP/soFnx0cGDjhlDP0+ufxxx597aFHHnbkMZdd8mctjBo18sKvXTB27Ngz3/SWZ59ZpJdMBxz0mrFjxn3761+ZOn3GEce8XgvBIv/k08/WylPr98r99t9owsTvXfjVSZMmH3/SafOefGz1KrbAO/b4Exc+Pf/Xv/jpTjvvetKpZ377G18RyymvZdvtd3zlvq/65c9/3NvTc9wbTtJLw5tvuNZ9uu9+++t12kU//u76vv43nHDy/gccdPNN15946pm333LTfffcufU2251x9nkah4H+6q+NKDxknT5w/id+/+uL5j81r/h1s823OOPsN2sM77/v7smTp+x3wEFnvektF37tS729PZVl6nGhY+J6QUjfk0rIqip+WJF3mXFLHRA72ovhqwCYbLVke6V0X1ba0x03ZVvV0amfWr3kEb5Xap7tGNU97uAdHARjD95+1cX3Ytk+a2GhYOVzjbhER9cIXcXKZx/y+1jRnlZRspNf8Yo9vvftb4wePWpgYGD+/Kf1IuGUU0484NX7n/uWd+oVgr7jhDe+/j///VMdHR36hrlzn9x8881333WXL3/p89+48Dvf+NZ3tCZr160ryjz6qMMPe91rFy5cNFbvJ4wd8+EPvk+vu/7457/oxaFeRO2+2676Hn1lgb5j0SJd+Sv3esX3vvONESO6n356wcWXXPaa1xz4htcfs+kmG7/17e8umtfb26tXRDNnbv6tb3z1ueeemzhhglbjpBPeoHfKPvnp/1i+ckVU7DN6sTR92rRtt21sTmj9lyzVezRLdGH/8a+fPOmkN+qLWtt58+dvvdVW06ZN3W/fV77nfR+64aabdV09vb1FKz71yY+/+oBXARiDffLJJ3z6Uw1fXC+9Ro4e+c/vf/dtt5v9sP6BgUJ4y1vedP4H36+Fe++7f9HCZw477LW67aNGjizwcdbY46+gt1ebbZiy8ZRf/PxHsx+e/fAjjx464zV77LH7j77/rePecMqy5cv0nT3N5m+zzdannnJiV1eXbl7R41/7yhdee8hrtD5XXnX1pAkT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yMRNd7n6klMvOOtHe37k+2uuv920KZOvv+KMbd71iSM/vYFSfe894DurrLWF3ua865aLdUcETXv7uz65xnpvnzN39uhxC+vs1t/+cMTdt1yy9U4f000es+Ais2ZM+8V33x+brbM673r/VxdaeKm5c+dqTM49/Xtij1evWHTJlQ45+vwvH9gZTbd/z2d32vOLh314eb0PvcUOB6y1wfa//N6+79nniDXX317PSGbMmKoNePzBSdSAuyZdUtUzZOjwLxx13g1X/PWSf/5c55r2+uj3des0OU/71ReeePi2JZdd/eDDz7j5mn9svOVeeiWw9Y4Hrb3xTn0LLKCtveDsHz32wCTa6s23+9CO7z1Er9AeuNuvMYI6X3j24e/+5t6jP7d5xS4Ngl4d/eCr79BdP+WlZ1ZafTO9dDni4PWqZz/0mRNfefnZc/501G9+sL9O8e2x/1H0dY7tR590l84Qzpo5/VNfP/P6y09fbuUNFpqw1DX/+dOFZx/nnOus331NZwJTvaazajrJ9qcTP6fzPi8888jVF5+y6tpbaT91NPvvRafEftTIk6qBtJd1Bx146O90F3/+qHOP+/ouYtZCZwV1TlLzUP/34N3XLr3COvqiTsT9uevj2rzHHpykk/8vPf/kUsuu/sOv7PDarBk3XXX2plt/YIO37n7JOSfEdz792D3rbrzzNz65zszpr+gMuW77xlvtqe98+N4brrroFB1A3KtVX98/Tv327Tee3zHjv2ft86mfLbbEirNem/nqjGmBkeKd2oMgLd0vCM3b3OBll16Uc9v6G2z8/HPPbrTp5uef+w938aILzn3gvo79yyy73D4f/ujPjjt22tRXmutCHDJs+JwZ5euIRQR5bdarb+483jyTBccvrkc0PdOAIkV6kgn7bDlum7UePuhErS/++V2HLDLmicNP0/qwlZcYs+Uaeuk1fOUl9Z9q+JCxW65x/+7fmzv11Wn/vWfaNfeO23Hi5D9d+fIFk6ZcOElf1Gm6Vx98dtTay2Xm63SKb870WVMuvV11/5z85yunXXffa89NUeSe2U++OOXJF1+9+/Flj//IlItv0/nQRQ/a7qmjz3zlP3foT2dMelj/N/69m/YNH9q8V9Qk995z57oTN77lxmurP9eduNGD9989dFhnPaxXPWusue5Pf3TUK1Ne1n/ec+dtD91/7wYbbR5skU+b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";
    CARD_SRC = "card-app-instagram.png";
  }
});

// .wrangler/tmp/bundle-vIXs31/middleware-loader.entry.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// .wrangler/tmp/bundle-vIXs31/middleware-insertion-facade.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/worker.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/kernel.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/telemetry.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DAY = 86400;
var key = /* @__PURE__ */ __name((d) => `__telemetry__:${d}`, "key");
var today = /* @__PURE__ */ __name(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "today");
async function bump(kv, field, n = 1) {
  if (!kv) return;
  const k = key(today());
  try {
    const raw = await kv.get(k);
    const o = raw ? JSON.parse(raw) : { requests: 0, errors: 0, http5xx: 0, settleFail: 0, byRoute: {} };
    o[field] = (o[field] || 0) + n;
    o.byRoute[field] = o.byRoute[field] || {};
    await kv.put(k, JSON.stringify(o), { expirationTtl: 31 * DAY });
  } catch {
  }
}
__name(bump, "bump");
var telemetry = {
  error: /* @__PURE__ */ __name((kv) => bump(kv, "errors"), "error"),
  http5xx: /* @__PURE__ */ __name((kv) => bump(kv, "http5xx"), "http5xx"),
  settleFail: /* @__PURE__ */ __name((kv) => bump(kv, "settleFail"), "settleFail"),
  request: /* @__PURE__ */ __name((kv) => bump(kv, "requests"), "request")
};
async function readTelemetry(kv, days = 7) {
  if (!kv) return { error: "no_kv" };
  const out = [];
  for (let i = 0; i < days; i++) {
    const d = new Date(Date.now() - i * DAY * 1e3).toISOString().slice(0, 10);
    const raw = await kv.get(key(d));
    if (raw) out.push({ date: d, ...JSON.parse(raw) });
  }
  return out;
}
__name(readTelemetry, "readTelemetry");

// src/x402v2.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var b64url = /* @__PURE__ */ __name((o) => {
  let s = btoa(JSON.stringify(o));
  return s.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}, "b64url");
var fromB64url = /* @__PURE__ */ __name((s) => {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return JSON.parse(atob(s));
}, "fromB64url");
var decodeToken = /* @__PURE__ */ __name((s) => {
  s = s.trim();
  s = s.replace(/^Bearer\s+/i, "");
  try {
    return fromB64url(s);
  } catch {
  }
  try {
    return JSON.parse(atob(s));
  } catch {
  }
  return null;
}, "decodeToken");
var USDC_DECIMALS = 6;
function buildV2Required({ resource, description, priceUsd, cfg: cfg2 }) {
  const network = cfg2.NETWORK_V2 || "eip155:8453";
  const amount = String(Math.round(priceUsd * 10 ** USDC_DECIMALS));
  const accept = {
    scheme: "exact",
    network,
    amount,
    asset: cfg2.USDC_BASE,
    payTo: cfg2.PAY_TO,
    maxTimeoutSeconds: cfg2.MAX_TIMEOUT_SECONDS || 60
  };
  return {
    x402Version: 2,
    error: "payment_required",
    resource: {
      url: resource,
      description: description || "",
      mimeType: "application/json"
    },
    accepts: [accept]
  };
}
__name(buildV2Required, "buildV2Required");
function paymentRequiredResponse({ resource, description, priceUsd, cfg: cfg2, v1Requirements }) {
  const v2 = buildV2Required({ resource, description, priceUsd, cfg: cfg2 });
  const headers = {
    "PAYMENT-REQUIRED": b64url([v2.accepts[0]]),
    "X-PAYMENT-REQUIRED": b64url(v2),
    "content-type": "application/json; charset=utf-8"
  };
  const body = { x402Version: 1, error: "payment_required", accepts: v1Requirements ? [v1Requirements] : [], v2 };
  return new Response(JSON.stringify(body), { status: 402, headers });
}
__name(paymentRequiredResponse, "paymentRequiredResponse");
function readPaymentHeader(request) {
  return request.headers.get("PAYMENT-SIGNATURE") || request.headers.get("PAYMENT") || request.headers.get("X-PAYMENT") || null;
}
__name(readPaymentHeader, "readPaymentHeader");
async function postJson(url, body) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  let j = null;
  try {
    j = await r.json();
  } catch {
  }
  return { ok: r.ok, status: r.status, j };
}
__name(postJson, "postJson");
async function verifySettleDual({ request, resource, amount, priceUsd, cfg: cfg2, v1Verify }) {
  const raw = readPaymentHeader(request);
  if (!raw) return { ok: false, reason: "payment_required" };
  const payload = decodeToken(raw);
  if (payload && (payload.x402Version === 2 || payload.scheme || payload.network)) {
    const fac = cfg2.FACILITATOR_V2 || cfg2.FACILITATOR;
    const atomic = String(Math.round(priceUsd * 1e6));
    const baseBody = {
      x402Version: 2,
      kind: "exact",
      payment: payload,
      payload,
      resource,
      amount: atomic,
      network: payload.network || (cfg2.NETWORK_V2 || "eip155:8453")
    };
    const v = await postJson(fac + "/verify", baseBody);
    const valid = v.j && (v.j.isValid === true || v.j?.verifyResponse?.isValid === true || v.j?.verifyResponse?.valid === true || v.j.valid === true);
    if (!v.ok || !valid) {
      const reason = v.j && (v.j.invalidReason || v.j?.verifyResponse?.invalidReason) || "invalid_payment";
      return { ok: false, reason };
    }
    const s = await postJson(fac + "/settle", {
      ...baseBody,
      verifyResponse: v.j,
      paymentParameters: v.j.paymentParameters
    });
    const success = s.j && (s.j.success === true || s.j?.settleResponse?.success === true);
    if (!s.ok || !success) return { ok: false, reason: "settle_failed" };
    return { ok: true, version: 2, settlement: s.j.settleResponse || s.j, payer: payload?.payload?.from || null };
  }
  if (typeof v1Verify === "function") {
    return v1Verify(raw);
  }
  return { ok: false, reason: "invalid_payment" };
}
__name(verifySettleDual, "verifySettleDual");

// src/analytics.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var DAY2 = 86400;
var hk = /* @__PURE__ */ __name((date, kind) => `__an_${kind}__:${date}`, "hk");
function today2(d = /* @__PURE__ */ new Date()) {
  return d.toISOString().slice(0, 10);
}
__name(today2, "today");
async function bump2(kv, key2, field, n = 1) {
  let obj = {};
  const raw = await kv.get(key2, "json");
  if (raw && typeof raw === "object") obj = raw;
  obj[field] = (obj[field] || 0) + n;
  await kv.put(key2, JSON.stringify(obj), { expirationTtl: 62 * DAY2 });
}
__name(bump2, "bump");
async function recordAnalytics(kv, payload, cookieHeader) {
  if (!kv || !payload) return false;
  const d = today2();
  try {
    if (payload.uid) {
      const ukey = hk(d, "uids");
      let set = [];
      const r = await kv.get(ukey, "json");
      if (Array.isArray(r)) set = r;
      if (!set.includes(payload.uid)) {
        if (set.length < 5e4) set.push(payload.uid);
        await kv.put(ukey, JSON.stringify(set), { expirationTtl: 40 * DAY2 });
        await bump2(kv, hk(d, "stat"), "uv", 1);
      }
    }
    if (payload.type === "pv") {
      const path = (payload.path || "/").split("?")[0].slice(0, 120) || "/";
      await bump2(kv, hk(d, "pv"), path, 1);
      const ref2 = (payload.ref || "").toLowerCase();
      if (ref2) {
        let dom = "";
        try {
          dom = new URL(ref2).hostname.replace(/^www\./, "");
        } catch {
        }
        if (dom && !dom.endsWith("pixharvest.com") && !dom.endsWith("workers.dev")) {
          await bump2(kv, hk(d, "ref"), dom, 1);
        }
      }
      await bump2(kv, hk(d, "stat"), "pv", 1);
    } else if (payload.type === "event") {
      const name = String(payload.name || "unknown").slice(0, 60);
      await bump2(kv, hk(d, "ev"), name, 1);
    }
    return true;
  } catch (e) {
    return false;
  }
}
__name(recordAnalytics, "recordAnalytics");
async function readAnalytics(kv, days = 7) {
  const out = { days, totals: { pv: 0, uv: 0 }, perDay: [], pages: {}, refs: {}, events: {} };
  const merge = /* @__PURE__ */ __name((dst, src) => {
    if (!src || typeof src !== "object") return;
    for (const k in src) dst[k] = (dst[k] || 0) + src[k];
  }, "merge");
  for (let i = 0; i < days; i++) {
    const dt = new Date(Date.now() - i * DAY2);
    const d = today2(dt);
    const stat = await kv.get(hk(d, "stat"), "json") || {};
    const pv = await kv.get(hk(d, "pv"), "json") || {};
    const ref2 = await kv.get(hk(d, "ref"), "json") || {};
    const ev = await kv.get(hk(d, "ev"), "json") || {};
    out.perDay.push({ date: d, pv: stat.pv || 0, uv: stat.uv || 0 });
    out.totals.pv += stat.pv || 0;
    out.totals.uv += stat.uv || 0;
    merge(out.pages, pv);
    merge(out.refs, ref2);
    merge(out.events, ev);
  }
  const top = /* @__PURE__ */ __name((o) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, 15), "top");
  out.topPages = top(out.pages);
  out.topRefs = top(out.refs);
  out.topEvents = top(out.events);
  return out;
}
__name(readAnalytics, "readAnalytics");
var ANALYTICS_JS = `
(function(){
 try{
  var uid=document.cookie.match(/(?:^|; )_uid=([^;]+)/);
  if(!uid){uid='a'+Date.now().toString(36)+Math.random().toString(36).slice(2,10);
   document.cookie='_uid='+uid+';path=/;max-age=31536000;SameSite=Lax';}else uid=uid[1];
  function send(o){o.uid=uid;
   try{navigator.sendBeacon&&navigator.sendBeacon('/__beacon',new Blob([JSON.stringify(o)],{type:'application/json'}));}
   catch(e){try{fetch('/__beacon',{method:'POST',keepalive:true,headers:{'content-type':'application/json'},body:JSON.stringify(o)});}catch(_){}}}
  send({type:'pv',path:location.pathname+location.search,ref:document.referrer||''});
  // \u6F0F\u6597\u4E8B\u4EF6\uFF1A\u70B9\u51FB\u5B9A\u4EF7/\u5347\u7EA7/\u4E0B\u5355\u76F8\u5173\u5143\u7D20
  document.addEventListener('click',function(e){
   var t=e.target.closest&&e.target.closest('a,button');if(!t)return;
   var label=t.getAttribute('data-funnel');
   var href=(t.getAttribute('href')||'').toLowerCase();
   if(label){send({type:'event',name:'click_'+label});}
   else if(href.indexOf('/pricing')===0||href.indexOf('pricing')>=0){send({type:'event',name:'go_pricing'});}
   else if(href.indexOf('/dashboard')===0){send({type:'event',name:'go_dashboard'});}
  },true);
 }catch(e){}
})();`;

// src/kernel.js
var json = /* @__PURE__ */ __name((data, status = 200, headers = {}) => new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", ...headers } }), "json");
var TRUST_HTML = `
<div class="wrap" style="margin-top:28px">
 <h2 style="font-size:20px">Real evidence, live data</h2>
 <p class="muted" style="margin:4px 0 14px">Every number pulled from the same public feed this service monitors. <a href="/card.png" target="_blank">open full size</a></p>
 <a href="/card.png" target="_blank"><img src="/card.png" alt="real change-intelligence report" loading="lazy" style="width:100%;max-width:860px;border:1px solid var(--line,#222a3a);border-radius:14px;display:block"></a>
</div>`;
var withAn = /* @__PURE__ */ __name((h, p = "") => {
  if (typeof h !== "string" || !h.includes("</body>")) return h;
  const trust = p === "/" || p === "/pricing" ? TRUST_HTML : "";
  return h.replace("</body>", `<style>img{max-width:100%}</style>${trust}<script>${ANALYTICS_JS}<\/script></body>`);
}, "withAn");
var htmlAn = /* @__PURE__ */ __name((s, st = 200, p = "") => new Response(withAn(s, p), { status: st, headers: { "content-type": "text/html; charset=utf-8" } }), "htmlAn");
function buildAgentMeta(cfg2, A, origin) {
  const host = origin ? origin.replace(/^https?:\/\//, "") : cfg2.HOST;
  const base = origin || `https://${host}`;
  const name = A.title || cfg2.TITLE || cfg2.NAME || "Change Intelligence";
  const longDesc = cfg2.AGENT_DESCRIPTION || `${name} for autonomous AI agents. Free public snapshot of ${cfg2.DOMAIN_LABEL || "public targets"}; paid change detection, intel reports, batch scans and landscape reports. Paid calls settle USDC on Base via x402 (P2P, 0% commission). One access key works across the whole change-intelligence family. Free CLI quota, Hobby $9/mo and higher plans.`;
  return {
    name,
    description: longDesc,
    image: `${base}/favicon.png`,
    x402Support: true,
    payment: {
      scheme: "exact",
      network: "eip155:8453",
      asset: cfg2.USDC_BASE,
      payTo: cfg2.PAY_TO,
      facilitator: cfg2.FACILITATOR,
      pricing: {
        changes: cfg2.PRICE_CHANGES_USD,
        intel: cfg2.PRICE_INTEL_USD,
        batchPerTarget: cfg2.PRICE_PER_TARGET_USD,
        landscape: cfg2.PRICE_LANDSCAPE_USD
      }
    },
    services: [
      { name: "MCP", endpoint: `${base}/mcp`, version: "2025-06-18", description: `${name} \u2014 Streamable HTTP MCP with free and x402-paid tools.` },
      { name: "API", endpoint: `${base}/v1/cli`, description: "CLI/agent endpoint: free anonymous quota, then x402 per call." },
      { name: "x402", endpoint: `${base}/.well-known/x402`, description: "Machine-readable payment requirements." },
      { name: "web", endpoint: `${base}/`, description: "Human docs, pricing, dashboard, demos." },
      { name: "pricing", endpoint: `${base}/pricing`, description: "Hobby $9, Pro $99, Business $499, Enterprise $2000 per month." }
    ]
  };
}
__name(buildAgentMeta, "buildAgentMeta");
var b64 = /* @__PURE__ */ __name((o) => btoa(JSON.stringify(o)), "b64");
var b64decode = /* @__PURE__ */ __name((s) => JSON.parse(atob(s)), "b64decode");
function newAccessKey(prefix = "sci_") {
  const b = new Uint8Array(24);
  crypto.getRandomValues(b);
  return prefix + Array.from(b, (x) => x.toString(16).padStart(2, "0")).join("");
}
__name(newAccessKey, "newAccessKey");
function buildRequirements(resource, priceUsd, description, cfg2) {
  const maxAmountRequired = String(Math.round(priceUsd * 1e6));
  return {
    x402Version: 1,
    network: cfg2.NETWORK,
    maxAmountRequired,
    resource,
    description,
    mimeType: "application/json",
    payTo: cfg2.PAY_TO,
    maxTimeoutSeconds: 60,
    contentType: "application/json",
    acceptedPayments: [{
      type: "erc20",
      network: cfg2.NETWORK,
      asset: cfg2.USDC_BASE,
      maxAmountRequired,
      payTo: cfg2.PAY_TO,
      requiredKind: ["exact"]
    }]
  };
}
__name(buildRequirements, "buildRequirements");
async function verifyAndSettle(payment, requirements, cfg2) {
  try {
    const token = payment.startsWith("Bearer ") ? payment.slice(7) : payment;
    const p = b64decode(token);
    const r = await fetch(cfg2.FACILITATOR + "/verify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ x402: p, kind: "exact", resource: requirements.resource, amount: requirements.maxAmountRequired })
    });
    const j = await r.json();
    if (!r.ok || !j?.verifyResponse?.valid) return { ok: false, reason: "invalid_payment" };
    const s = await fetch(cfg2.FACILITATOR + "/settle", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ x402: p, kind: "exact", resource: requirements.resource, amount: requirements.maxAmountRequired })
    });
    const sj = await s.json();
    if (!s.ok || !sj?.settleResponse?.success) return { ok: false, reason: "settle_failed" };
    return { ok: true, payment: p, settlement: sj.settleResponse };
  } catch {
    return { ok: false, reason: "verify_error" };
  }
}
__name(verifyAndSettle, "verifyAndSettle");
async function requirePaid(request, resource, priceUsd, description, cfg2) {
  const requirements = buildRequirements(resource, priceUsd, description, cfg2);
  const payment = request.headers.get("PAYMENT") || request.headers.get("X-PAYMENT") || request.headers.get("PAYMENT-SIGNATURE");
  if (!payment) return { paid: false, requirements, response: paymentRequiredResponse({ resource, description, priceUsd, cfg: cfg2, v1Requirements: requirements }) };
  const s = await verifySettleDual({
    request,
    resource,
    amount: requirements.maxAmountRequired,
    priceUsd,
    cfg: cfg2,
    v1Verify: /* @__PURE__ */ __name((raw) => verifyAndSettle(raw, requirements, cfg2), "v1Verify")
  });
  if (!s.ok) return { paid: false, requirements, response: json({ error: s.reason }, 402) };
  return { paid: true, settlement: s.settlement };
}
__name(requirePaid, "requirePaid");
var LIMITS = { hobby: 10, pro: 25, business: 150, enterprise: 1e5 };
var FREE_CLI_QUOTA = { changes: 20, intel: 20, batch: 3, landscape: 3 };
var PLANS = /* @__PURE__ */ __name((A) => ({
  hobby: { id: "hobby", name: "Hobby", price: 9, days: 30, features: A.planFeatures?.hobby || ["Unlimited CLI calls", "No attribution", "All per-result tools"] },
  pro: { id: "pro", name: "Pro", price: 99, days: 30, features: A.planFeatures?.pro || [] },
  business: { id: "business", name: "Business", price: 499, days: 30, features: A.planFeatures?.business || [] },
  enterprise: { id: "enterprise", name: "Enterprise", price: 2e3, days: 30, features: A.planFeatures?.enterprise || [] }
}), "PLANS");
async function loadSub(kv, key2) {
  if (!kv || !key2) return null;
  const raw = await kv.get(`sub-${key2}`);
  if (!raw) return null;
  const sub = JSON.parse(raw);
  sub.active = new Date(sub.expiresAt).getTime() > Date.now();
  return sub;
}
__name(loadSub, "loadSub");
async function bumpInstall(kv, installId, kind, win) {
  if (!installId) return null;
  const key2 = `inst-${installId}`;
  const now = Date.now();
  let rec = null;
  const raw = await kv.get(key2);
  if (raw) {
    try {
      rec = JSON.parse(raw);
    } catch {
      rec = null;
    }
  }
  if (!rec || !rec.windowStart || now - rec.windowStart > 30 * 864e5) rec = { windowStart: now, events: [], wins: [] };
  rec.events = rec.events.filter((e) => now - e.t < 30 * 864e5);
  const isWin = kind.startsWith("_win_");
  if (!isWin) rec.events.push({ t: now, k: kind });
  if (win || isWin) {
    rec.wins = rec.wins || [];
    if (rec.wins.length < 30) rec.wins.push(win || kind.replace(/^_win_/, ""));
  }
  await kv.put(key2, JSON.stringify(rec), { expirationTtl: 60 * 86400 });
  const realKind = isWin ? kind.replace(/^_win_/, "") : kind;
  const used = rec.events.filter((e) => e.k === realKind).length;
  return { used, wins: rec.wins };
}
__name(bumpInstall, "bumpInstall");
async function gateCli(cfg2, kv, request, url, kind, win) {
  const key2 = url.searchParams.get("key");
  if (key2) {
    const sub = await loadSub(kv, key2);
    if (sub && sub.active) return { allow: true, sub };
    return { allow: false, reason: "key_invalid" };
  }
  const install = url.searchParams.get("install") || request.headers.get("x-install-id") || "";
  if (install) {
    const quota = cfg2.FREE_QUOTA?.[kind] ?? FREE_CLI_QUOTA[kind] ?? 0;
    const m = await bumpInstall(kv, install, kind, win);
    if (m && m.used <= quota) return { allow: true, used: m.used, quota, wins: m.wins };
    return { allow: false, reason: "quota_exceeded", used: m?.used, quota, wins: m?.wins || [] };
  }
  return { allow: false, reason: "no_identity" };
}
__name(gateCli, "gateCli");
async function getWatch(kv, key2) {
  const raw = await kv.get(`watch-${key2}`);
  return raw ? JSON.parse(raw) : { targets: [], webhookUrl: "", alertEmail: "", updatedAt: null };
}
__name(getWatch, "getWatch");
async function watchView(A, kv, key2, skv) {
  const sub = await loadSub(skv || kv, key2);
  if (!sub) return { error: "invalid_key", status: 401 };
  const wl = await getWatch(kv, key2);
  return {
    accessKey: key2,
    plan: sub.plan,
    active: sub.active,
    expiresAt: sub.expiresAt,
    targetLimit: LIMITS[sub.plan] || 0,
    targets: wl.targets,
    webhookUrl: wl.webhookUrl || "",
    alertEmail: wl.alertEmail || ""
  };
}
__name(watchView, "watchView");
async function dispatchAlerts(A, cfg2, wl, alerts, env3) {
  if (!alerts.length) return;
  if (wl.webhookUrl) for (const a of alerts) try {
    await fetch(wl.webhookUrl, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ source: A.id, ...a }) });
  } catch {
  }
  if (wl.alertEmail && (cfg2.RESEND_API_KEY || env3 && env3.RESEND_API_KEY)) try {
    const total = alerts.reduce((n, a) => n + a.changes.length, 0);
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: "Bearer " + (cfg2.RESEND_API_KEY || env3.RESEND_API_KEY), "content-type": "application/json" },
      body: JSON.stringify({ from: `${A.title} <alerts@${cfg2.MAIL_DOMAIN || "example.com"}>`, to: [wl.alertEmail], subject: `\u{1F514} ${total} change(s) \xB7 ${A.title}`, html: A.emailHtml ? A.emailHtml(alerts) : JSON.stringify(alerts) })
    });
  } catch {
  }
}
__name(dispatchAlerts, "dispatchAlerts");
async function refreshWatchlist(A, cfg2, kv, wl, only) {
  const targets = only ? wl.targets.filter((t) => t.target === only) : wl.targets;
  const alerts = [];
  await Promise.all(targets.map(async (entry) => {
    try {
      const snap = await A.fetchSnapshot({ platform: entry.platform, handle: entry.handle });
      const prev = await kv.get(A.kvKey(snap.platform, snap.handle));
      const changes = prev ? A.diff(JSON.parse(prev).items, snap.items) : [];
      await kv.put(A.kvKey(snap.platform, snap.handle), JSON.stringify({ items: snap.items, at: Date.now() }));
      entry.lastChecked = (/* @__PURE__ */ new Date()).toISOString();
      entry.lastChanges = changes.slice(0, 100);
      if (changes.length) alerts.push({ target: snap.handle, platform: snap.platform, changes: changes.slice(0, 50), checkedAt: entry.lastChecked });
    } catch (e) {
      entry.lastChecked = (/* @__PURE__ */ new Date()).toISOString();
      entry.error = String(e?.message || e);
    }
  }));
  return alerts;
}
__name(refreshWatchlist, "refreshWatchlist");
async function scheduledScan(A, cfg2, env3) {
  const kv = env3[cfg2.KV_BINDING];
  const skv = env3[cfg2.SHARED_BINDING] || kv;
  let cursor, scanned = 0, refreshed = 0;
  do {
    const l = await kv.list({ prefix: "watch-", cursor, limit: 100 });
    for (const it of l.keys) {
      const key2 = it.name.slice(6);
      if (!key2.startsWith("sci_")) continue;
      scanned++;
      try {
        const sub = await loadSub(skv, key2);
        if (!sub || !sub.active) continue;
        const wl = await getWatch(kv, key2);
        if (!wl.targets.length) continue;
        const alerts = await refreshWatchlist(A, cfg2, kv, wl);
        await kv.put(`watch-${key2}`, JSON.stringify(wl));
        await dispatchAlerts(A, cfg2, wl, alerts, env3);
        refreshed++;
      } catch {
      }
    }
    cursor = l.cursor;
    if (scanned >= 500) break;
  } while (cursor);
  console.log(A.id, "scheduled scan", scanned, refreshed);
}
__name(scheduledScan, "scheduledScan");
var RPC = /* @__PURE__ */ __name((cfg2) => cfg2.RPC_URL || "https://mainnet.base.org", "RPC");
async function baseBlockNumber(cfg2) {
  const r = await fetch(RPC(cfg2), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: "eth_blockNumber", params: [] }) });
  return parseInt((await r.json()).result, 16);
}
__name(baseBlockNumber, "baseBlockNumber");
async function findDirectPayment(cfg2, expectUnits, windowBlocks = 1900) {
  const head = await baseBlockNumber(cfg2);
  const fromBlock = "0x" + Math.max(0, head - windowBlocks).toString(16);
  const padded = cfg2.PAY_TO.slice(2).toLowerCase().padStart(64, "0");
  const topics = ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef", null, "0x" + padded];
  const r = await fetch(RPC(cfg2), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", id: 2, method: "eth_getLogs", params: [{ address: cfg2.USDC_BASE, fromBlock, toBlock: "latest", topics }] })
  });
  const j = await r.json();
  if (!Array.isArray(j.result)) return null;
  for (const log3 of j.result) {
    if (log3.data && BigInt(log3.data) === BigInt(expectUnits)) {
      const from = "0x" + (log3.topics[1] || "").slice(26);
      return { tx: log3.transactionHash, from, block: parseInt(log3.blockNumber, 16) };
    }
  }
  return null;
}
__name(findDirectPayment, "findDirectPayment");
function createDirectOrder(plan, cfg2, kv) {
  const salt = crypto.getRandomValues(new Uint8Array(2));
  const extra = (salt[0] << 8 | salt[1]) % 900 + 100;
  const amountUsd = +(plan.price + extra / 1e6).toFixed(6);
  const orderId = newAccessKey("ord_");
  const order = { orderId, plan: plan.id, planName: plan.name, amountUsd, amountUnits: String(Math.round(amountUsd * 1e6)), payTo: cfg2.PAY_TO, network: cfg2.NETWORK, asset: cfg2.USDC_BASE, status: "awaiting", createdAt: (/* @__PURE__ */ new Date()).toISOString(), expiresAt: new Date(Date.now() + 90 * 6e4).toISOString() };
  return kv.put(`order-${orderId}`, JSON.stringify(order), { expirationTtl: 5400 }).then(() => order);
}
__name(createDirectOrder, "createDirectOrder");
async function checkDirectOrder(order, cfg2, kv, A, skv) {
  if (order.status === "paid") return order;
  if (new Date(order.expiresAt).getTime() < Date.now()) {
    order.status = "expired";
    await kv.put(`order-${order.orderId}`, JSON.stringify(order));
    return order;
  }
  const found = await findDirectPayment(cfg2, order.amountUnits);
  if (!found) return order;
  order.status = "paid";
  order.tx = found.tx;
  order.payer = found.from;
  order.paidAt = (/* @__PURE__ */ new Date()).toISOString();
  const now = Date.now();
  const plan = PLANS(A)[order.plan];
  const expiresAt = new Date(now + plan.days * 864e5).toISOString();
  const accessKey = newAccessKey();
  order.accessKey = accessKey;
  await (skv || kv).put(`sub-${accessKey}`, JSON.stringify({ accessKey, plan: plan.id, payer: found.from || "", startedAt: new Date(now).toISOString(), expiresAt, priceUsd: plan.price, source: "direct", orderId: order.orderId }));
  await kv.put(`order-${order.orderId}`, JSON.stringify(order));
  return order;
}
__name(checkDirectOrder, "checkDirectOrder");
async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}
__name(readJson, "readJson");
function createServer(A, cfg2) {
  const Plans = PLANS(A);
  async function handleSubscribe(url, request, kv, skv) {
    const plan = Plans[url.searchParams.get("plan")];
    if (!plan) return json({ error: "invalid_plan", plans: Object.keys(Plans) }, 400);
    const origin = url.origin;
    const resource = `${origin}/v1/subscribe?plan=${plan.id}`;
    const pay = await requirePaid(request, resource, plan.price, `${A.title} ${plan.name} subscription`, cfg2);
    if (!pay.paid) return pay.response;
    const now = Date.now();
    const expiresAt = new Date(now + plan.days * 864e5).toISOString();
    const accessKey = newAccessKey();
    await (skv || kv).put(`sub-${accessKey}`, JSON.stringify({ accessKey, plan: plan.id, payer: pay.settlement.payer || "", startedAt: new Date(now).toISOString(), expiresAt, priceUsd: plan.price }));
    return json({ ok: true, accessKey, plan: plan.id, expiresAt });
  }
  __name(handleSubscribe, "handleSubscribe");
  async function watchAdd(url, request, kv, skv) {
    const key2 = url.searchParams.get("key");
    const sub = await loadSub(skv || kv, key2);
    if (!sub) return json({ error: "invalid_key" }, 401);
    if (!sub.active) return json({ error: "subscription_expired" }, 402);
    const body = await readJson(request);
    const parsed = A.parseTarget(body.target);
    if (!parsed) return json({ error: "invalid_target" }, 400);
    const wl = await getWatch(kv, key2);
    if (wl.targets.length >= (LIMITS[sub.plan] || 0)) return json({ error: "plan_limit" }, 400);
    if (wl.targets.some((t) => t.target === parsed.handle && t.platform === parsed.platform)) return json({ error: "already_added" }, 400);
    wl.targets.push({ target: parsed.handle, platform: parsed.platform, addedAt: (/* @__PURE__ */ new Date()).toISOString(), lastChecked: null, lastChanges: [] });
    await kv.put(`watch-${key2}`, JSON.stringify(wl));
    return json(await watchView(A, kv, key2, skv));
  }
  __name(watchAdd, "watchAdd");
  async function watchRemove(url, request, kv, skv) {
    const key2 = url.searchParams.get("key");
    if (!await loadSub(skv || kv, key2)) return json({ error: "invalid_key" }, 401);
    const body = await readJson(request);
    const wl = await getWatch(kv, key2);
    wl.targets = wl.targets.filter((t) => t.target !== A.safeHandle(body.target));
    await kv.put(`watch-${key2}`, JSON.stringify(wl));
    return json(await watchView(A, kv, key2, skv));
  }
  __name(watchRemove, "watchRemove");
  async function watchSettings(url, request, kv, skv) {
    const key2 = url.searchParams.get("key");
    if (!await loadSub(skv || kv, key2)) return json({ error: "invalid_key" }, 401);
    const body = await readJson(request);
    const webhookUrl = (body.webhookUrl || "").trim().slice(0, 500);
    const alertEmail = (body.alertEmail || "").trim().slice(0, 200);
    if (webhookUrl && !/^https:\/\//.test(webhookUrl)) return json({ error: "webhook_https" }, 400);
    if (alertEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(alertEmail)) return json({ error: "invalid_email" }, 400);
    const wl = await getWatch(kv, key2);
    wl.webhookUrl = webhookUrl;
    wl.alertEmail = alertEmail;
    await kv.put(`watch-${key2}`, JSON.stringify(wl));
    return json(await watchView(A, kv, key2, skv));
  }
  __name(watchSettings, "watchSettings");
  async function watchRefresh(url, request, kv, skv) {
    const key2 = url.searchParams.get("key");
    const sub = await loadSub(skv || kv, key2);
    if (!sub) return json({ error: "invalid_key" }, 401);
    if (!sub.active) return json({ error: "subscription_expired" }, 402);
    const wl = await getWatch(kv, key2);
    const only = url.searchParams.get("target");
    const alerts = await refreshWatchlist(A, cfg2, kv, wl, only);
    await kv.put(`watch-${key2}`, JSON.stringify(wl));
    await dispatchAlerts(A, cfg2, wl, alerts, env);
    return json(await watchView(A, kv, key2, skv));
  }
  __name(watchRefresh, "watchRefresh");
  async function handleMcp(request, kv) {
    let msg;
    try {
      msg = await request.json();
    } catch {
      return json({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "parse error" } }, 400);
    }
    const { id } = msg;
    const ok = /* @__PURE__ */ __name((result) => json({ jsonrpc: "2.0", id, result }), "ok");
    const err = /* @__PURE__ */ __name((code, message) => json({ jsonrpc: "2.0", id, error: { code, message } }), "err");
    const text = /* @__PURE__ */ __name((t, isError, extra) => json({ jsonrpc: "2.0", id, result: { content: [{ type: "text", text: t }] }, ...isError ? { isError: true } : {} }, 200, extra || {}), "text");
    if (msg.method === "initialize") return ok({ protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: A.id, version: A.version } });
    if (msg.method === "notifications/initialized") return new Response(null, { status: 202 });
    if (msg.method === "tools/list") return ok({ tools: A.mcpTools });
    if (msg.method === "tools/call") {
      const a = msg.params?.arguments || {};
      const def = A.mcpTools.find((t) => t.name === msg.params?.name);
      if (!def) return err(-32601, "unknown tool");
      const price = def.price(a);
      const resource = request.url;
      if (price > 0) {
        const pay = await requirePaid(request, resource, price, def.name, cfg2);
        if (!pay.paid) {
          const r = pay.requirements;
          return text(JSON.stringify({ x402Version: 1, error: "payment_required", accepts: [r] }), true, { "PAYMENT-REQUIRED": b64(r) });
        }
      }
      try {
        return text(JSON.stringify(await def.run(a)));
      } catch (e) {
        return text(JSON.stringify({ error: String(e?.message || e) }), true);
      }
    }
    return err(-32601, "method not found");
  }
  __name(handleMcp, "handleMcp");
  async function handleCli(A2, cfg3, request, url, kv) {
    const kind = url.searchParams.get("tool");
    const toolMap = { changes: "repo_changes", intel: "repo_intel_report", batch: "repo_batch_scan", landscape: "repo_landscape" };
    const def = A2.mcpTools.find((t) => t.name === toolMap[kind]);
    if (!def) return json({ error: "invalid_tool", tools: Object.keys(toolMap) }, 400);
    let args;
    if (kind === "batch" || kind === "landscape") {
      let body = {};
      if (request.method === "POST") {
        try {
          body = await request.json();
        } catch {
          body = {};
        }
      }
      const targets = body.targets || (url.searchParams.get("targets") || "").split(",").map((s) => s.trim()).filter(Boolean);
      args = { targets };
    } else {
      args = { target: url.searchParams.get("target") };
    }
    if ((kind === "changes" || kind === "intel") && !A2.parseTarget(args.target)) return json({ error: "invalid_target" }, 400);
    const payHdr = request.headers.get("X-PAYMENT") || "";
    if (!payHdr) {
      const g = await gateCli(cfg3, kv, request, url, kind);
      if (!g.allow) {
        const plansUrl = "/pricing";
        return json({
          error: g.reason,
          upgrade: "https://" + (cfg3.HOST || url.host) + plansUrl,
          hobby: { id: "hobby", price: 9, perks: "unlimited CLI, no attribution" },
          used: g.used,
          quota: g.quota,
          valueDelivered: (g.wins || []).slice(-6),
          message: g.reason === "quota_exceeded" ? `You've used this ${g.used} times in 30 days. Hobby ($9/month) unlocks unlimited calls and removes attribution.` : "Add ?key=<accessKey> or ?install=<id>."
        }, 402);
      }
    } else {
      const price = def.price(args);
      const pay = await requirePaid(request, request.url, price, def.name, cfg3);
      if (!pay.paid) return json({ x402Version: 1, error: "payment_required", accepts: [pay.requirements] }, 402, { "PAYMENT-REQUIRED": b64(pay.requirements) });
    }
    let result;
    try {
      result = await def.run(args);
    } catch (e) {
      const msg = String(e?.message || e);
      return json({ error: "upstream_unavailable", detail: msg, retry: "try again shortly" }, 502);
    }
    const installId = request.headers.get("x-install-id") || url.searchParams.get("install") || "";
    if (installId && !url.searchParams.get("key") && !payHdr) {
      const win = A2.winEvidence?.(kind, args, result) || `${kind} call for ${args.target || (args.targets || []).length + " targets"}`;
      await bumpInstall(kv, installId, "_win_" + kind, win).catch(() => {
      });
    }
    const attributed = !!(url.searchParams.get("key") || payHdr);
    return json({ data: result, attribution: attributed ? "" : A2.cliAttribution || `${A2.title} \u2014 free via x402 \xB7 remove attribution with Hobby $9/mo` });
  }
  __name(handleCli, "handleCli");
  async function handle(request, env3) {
    const url = new URL(request.url);
    const p = url.pathname;
    const kv = env3[cfg2.KV_BINDING];
    const skv = env3[cfg2.SHARED_BINDING] || kv;
    if (p === "/") return htmlAn(A.renderHome(), 200, "/");
    if (p === "/changelog") return htmlAn(A.renderChangelog(cfg2.TITLE || cfg2.NAME));
    if (p === "/pricing") return htmlAn(A.renderPricing(Plans), 200, "/pricing");
    if (p === "/dashboard") return htmlAn(A.renderDashboard());
    if (p === "/health") return json({ ok: true });
    if (p === "/status") return htmlAn(A.renderStatus(cfg2.TITLE || cfg2.NAME, cfg2.STATUS_TARGET || A.STATUS_TARGET || ""));
    if (p === "/favicon.png") {
      const { FAVICON_B64: FAVICON_B642 } = await Promise.resolve().then(() => (init_brand(), brand_exports));
      return new Response(Uint8Array.from(atob(FAVICON_B642), (c) => c.charCodeAt(0)), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
    }
    if (p === "/og.png") {
      const { OG_B64: OG_B642 } = await Promise.resolve().then(() => (init_brand(), brand_exports));
      return new Response(Uint8Array.from(atob(OG_B642), (c) => c.charCodeAt(0)), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
    }
    if (p === "/card.png") {
      const { CARD_B64: CARD_B642 } = await Promise.resolve().then(() => (init_trust(), trust_exports));
      return new Response(Uint8Array.from(atob(CARD_B642), (c) => c.charCodeAt(0)), { headers: { "content-type": "image/png", "cache-control": "public, max-age=86400" } });
    }
    if (p === "/llms.txt") return new Response(A.llmsTxt(cfg2), { headers: { "content-type": "text/plain" } });
    if (p === "/docs") return new Response(A.docsMd(cfg2), { headers: { "content-type": "text/markdown; charset=utf-8" } });
    if (p === "/robots.txt") return new Response("User-agent: *\nAllow: /\n", { headers: { "content-type": "text/plain" } });
    if (p === "/sitemap.xml") return new Response(A.sitemapXml(cfg2), { headers: { "content-type": "application/xml" } });
    if (p === "/__beacon") {
      if (request.method !== "POST") return json({ error: "method" }, 405);
      let body = {};
      try {
        body = await request.json();
      } catch {
      }
      await recordAnalytics(kv, body, request.headers.get("cookie"));
      return new Response("", { status: 204 });
    }
    if (p === "/.well-known/x402") return json(A.wellKnown(cfg2));
    if (p === "/.well-known/agent.json") return json(buildAgentMeta(cfg2, A, url.origin));
    if (p === "/.well-known/glama.json") return json({ $schema: "https://glama.ai/mcp/schemas/connector.json", maintainers: [{ email: cfg2.CONTACT_EMAIL }] });
    if (p === "/privacy") return htmlAn(A.renderLegal("Privacy Policy", cfg2));
    if (p === "/terms") return htmlAn(A.renderLegal("Terms of Service", cfg2));
    if (p === "/contact") return htmlAn(A.renderLegal("Contact & Abuse", cfg2));
    if (p === "/mcp") return handleMcp(request, kv);
    if (p === "/v1/snapshot") {
      const t = A.parseTarget(url.searchParams.get("target"));
      if (!t) return json({ error: "invalid_target" }, 400);
      return json(await A.snapshot(t));
    }
    if (p === "/v1/subscribe") return handleSubscribe(url, request, kv, skv);
    if (p === "/v1/order") {
      const plan = Plans[url.searchParams.get("plan")];
      if (!plan) return json({ error: "invalid_plan", plans: Object.keys(Plans) }, 400);
      const order = await createDirectOrder(plan, cfg2, kv);
      return json(order);
    }
    if (p === "/v1/order/check") {
      const id = url.searchParams.get("id");
      const raw = id ? await kv.get(`order-${id}`) : null;
      if (!raw) return json({ error: "order_not_found" }, 404);
      return json(await checkDirectOrder(JSON.parse(raw), cfg2, kv, A, skv));
    }
    if (p === "/v1/watch") return json(await watchView(A, kv, url.searchParams.get("key"), skv));
    if (p === "/v1/cli") return handleCli(A, cfg2, request, url, kv);
    if (p === "/v1/watch/add") return watchAdd(url, request, kv, skv);
    if (p === "/v1/watch/remove") return watchRemove(url, request, kv, skv);
    if (p === "/v1/watch/settings") return watchSettings(url, request, kv, skv);
    if (p === "/v1/watch/refresh") return watchRefresh(url, request, kv, skv);
    if (p === "/v1/admin/stats") {
      if ((request.headers.get("x-admin-key") || url.searchParams.get("key")) !== cfg2.ADMIN_KEY) return json({ error: "forbidden" }, 403);
      const days = parseInt(url.searchParams.get("days") || "7");
      return json({ ok: true, telemetry: await readTelemetry(kv, days), visitors: await readAnalytics(kv, days) });
    }
    return json({ error: "not_found" }, 404);
  }
  __name(handle, "handle");
  return {
    async fetch(request, env3) {
      try {
        if (request.method === "OPTIONS") return new Response(null, { headers: { "access-control-allow-origin": "*", "access-control-allow-headers": "*", "access-control-allow-methods": "*" } });
        const r = await handle(request, env3);
        r.headers.set("access-control-allow-origin", "*");
        r.headers.set("X-Content-Type-Options", "nosniff");
        return r;
      } catch (e) {
        console.error(e);
        try {
          const kv0 = env3[cfg2.KV_BINDING];
          await telemetry.http5xx(kv0);
        } catch {
        }
        return json({ error: "internal_error" }, 500);
      }
    },
    async scheduled(event, env3, ctx) {
      ctx.waitUntil(scheduledScan(A, cfg2, env3));
    }
  };
}
__name(createServer, "createServer");

// src/adapter.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();

// src/pages.js
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var CSS = `
:root{--bg:#0b0e14;--card:#141925;--line:#222a3a;--fg:#e8ecf4;--mut:#8b95a7;--acc:#5b8cff}
*{box-sizing:border-box}body{margin:0;font:15px/1.6 -apple-system,Segoe UI,Roboto,Arial,sans-serif;background:var(--bg);color:var(--fg)}
.wrap{max-width:920px;margin:0 auto;padding:48px 22px}h1{font-size:30px;margin:0 0 6px}
.sub{color:var(--mut);margin-bottom:22px}a{color:#9db8ff}
.card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px;margin:16px 0}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.row{display:flex;gap:10px;flex-wrap:wrap}
input{flex:1;min-width:220px;background:#0d1119;border:1px solid var(--line);border-radius:9px;color:var(--fg);padding:11px 13px}
button{padding:11px 18px;border-radius:9px;border:1px solid var(--acc);background:var(--acc);color:#fff;font-weight:600;cursor:pointer}
button.ghost{background:transparent;color:#cdd9ff}code{background:#0d1119;border:1px solid var(--line);border-radius:6px;padding:2px 7px;font-size:12.5px}
pre{background:#0d1119;border:1px solid var(--line);border-radius:10px;padding:14px;overflow:auto;font-size:12.5px;max-height:300px}
.muted{color:var(--mut);font-size:13px}.pill{display:inline-block;background:#0d1119;border:1px solid var(--line);border-radius:999px;padding:4px 12px;font-size:12px;margin:3px}
@media(max-width:760px){.grid{grid-template-columns:1fr}}
`;
var DEFAULT_DESC = "Monitor iOS app reviews, negative-review alerts and rating trends. Free CLI quota, Hobby $9/mo in USDC.";
var shell = /* @__PURE__ */ __name((title2, body, desc = DEFAULT_DESC) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${desc}">
<link rel="icon" type="image/png" href="/favicon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="${title2}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="/og.png">
<meta name="twitter:card" content="summary_large_image">
<title>${title2}</title><style>${CSS}</style></head><body><div class="wrap">${body}</div></body></html>`, "shell");
function renderHome() {
  return shell("App Store Change Intelligence", `
<h1>App Store Change Intelligence</h1>
<p class="sub">Track new reviews, ratings and version updates for public App Store apps. Free snapshot \xB7 paid intel in <b>USDC on Base</b> via <b>x402</b>.</p>
<div class="card">
<label class="muted">Try free \u2014 numeric App Store ID</label>
<div class="row"><input id="t" value="389801252"><button onclick="run()">Get snapshot</button></div>
<pre id="out">// result</pre>
<div id="up" style="display:none;border-color:var(--acc);background:linear-gradient(180deg,rgba(91,140,255,.10),var(--card))">
<b>That's the current state.</b><p class="muted">A <code>$0.05</code> changes call shows exactly what's new since your last check \u2014 new reviews, negative-review flags, version bumps. Watching it continuously with alerts starts at $99/month.</p>
<div class="row"><a href="/pricing"><button type="button">See plans</button></a></div>
</div>
</div>
<div class="grid">
<div class="card"><b>Free</b><p class="muted">Version, rating, recent reviews</p><code>/v1/snapshot</code></div>
<div class="card"><b>$0.05</b><p class="muted">New/removed reviews; flags new negative</p><code>app_review_changes</code></div>
<div class="card" style="border-color:var(--acc)"><b>$0.50 \u2B50</b><p class="muted">Sentiment & negative-review report</p><code>app_intel_report</code></div>
</div>
<div class="card"><b>For teams scanning many apps</b><p class="muted"><code>$0.03 / app</code> batch (up to 50) &nbsp;\xB7&nbsp; <code>$5</code> landscape (up to 10 apps) with rating ranking and risk flags.</p></div>
<div class="card" style="border-color:var(--acc);background:linear-gradient(180deg,rgba(91,140,255,.10),var(--card))">
<b>Continuous app intelligence?</b><p class="muted">Watch a portfolio of apps, get alerted on new negative reviews and releases. From <b>$99/month</b>, USDC, instant key.</p>
<div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px"><a href="/pricing"><button type="button">See plans</button></a><a href="/dashboard"><button type="button" class="ghost">Dashboard</button></a></div>
</div>
<p class="muted"><a href="/pricing">pricing</a> \xB7 <a href="/dashboard">dashboard</a> \xB7 <a href="/status">status</a> \xB7 <a href="/health">health</a> \xB7 <a href="/terms">terms</a> \xB7 <a href="/privacy">privacy</a> \xB7 <a href="/contact">contact</a></p>
<script>
async function run(){const o=document.getElementById('out');o.textContent='loading\u2026';
 try{const r=await fetch('/v1/snapshot?target='+encodeURIComponent(document.getElementById('t').value));o.textContent=JSON.stringify(await r.json(),null,2);document.getElementById('up').style.display='block';}
 catch(e){o.textContent='error '+e;}}
<\/script>`);
}
__name(renderHome, "renderHome");
var CHANGELOG = [
  { date: "2026-10-01", tag: "Growth", items: [
    "Hobby $9 entry plan launched across the product line.",
    "Free CLI with per-install quota: changes/intel 20, batch/landscape 3 per 30 days.",
    "Product surfaces now share one access key across all five intelligence feeds."
  ] },
  { date: "2026-09-30", tag: "Discovery", items: [
    "Added llms.txt and /docs for AI-agent discoverability.",
    "Public /status page with live browser-side health probes.",
    "Landing page now bridges snapshot results into a clear upgrade path."
  ] },
  { date: "2026-09-29", tag: "Platform", items: [
    "Listed on the official MCP Registry, Smithery and Glama.",
    "Self-serve /pricing checkout and /dashboard with webhook + email alerts.",
    "Company-grade hardening: no key custody, SSRF guard, per-key rate limits."
  ] }
];
function renderChangelog(productName = "Change Intelligence") {
  const rows = CHANGELOG.map((r) => `
<div class="cl-card">
  <div class="cl-head"><span class="cl-date">${r.date}</span><span class="cl-tag">${r.tag}</span></div>
  <ul>${r.items.map((i) => `<li>${i}</li>`).join("")}</ul>
</div>`).join("");
  return shell("Changelog \xB7 " + productName, `
<h1>Changelog</h1><p class="sub">What shipped, most recent first.</p>
${rows}
<style>
.cl-card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin:14px 0}
.cl-head{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.cl-date{font-weight:700}.cl-tag{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:var(--acc);border:1px solid var(--line);border-radius:999px;padding:2px 10px}
.cl-card ul{margin:0;padding-left:20px}.cl-card li{padding:3px 0;font-size:14px}
</style>`);
}
__name(renderChangelog, "renderChangelog");
function renderPricing(Plans) {
  const cards = Object.values(Plans).map((p, i) => `
<div class="plan${i === 1 ? " hl" : ""}">${i === 1 ? '<div class="pop">Most popular</div>' : ""}
<div class="pname">${p.name}</div><div class="price"><span class="amt">$${p.price}</span><span class="per">/month</span></div>
<ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
<button class="cta" data-plan="${p.id}">Choose ${p.name}</button></div>`).join("");
  return shell("Pricing \xB7 App Store Change Intelligence", `
<h1 style="text-align:center">Plans &amp; pricing</h1><p class="sub" style="text-align:center">Billed in <b>USDC on Base</b> \u2014 no card.</p>
<div class="grid2">${cards}</div>
<div class="card" id="paybox" style="display:none"></div>
<p class="sub" style="text-align:center;margin-top:26px">Paying directly with USDC? No AI wallet needed \u2014 click a plan above, send the exact amount, your key is issued automatically.</p>
<style>
.grid2{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
#paybox .payrow{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,.05);font-size:14px}
#paybox .payrow b{word-break:break-all;text-align:right}
#paybox .big{font-size:26px;font-weight:700;color:var(--acc)}
#paybox button{margin-top:14px;padding:11px 18px;background:var(--acc);color:#fff;border:none;border-radius:10px;cursor:pointer;font-size:15px}
.plan{position:relative;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:26px 22px;display:flex;flex-direction:column}
.plan.hl{border-color:var(--acc);box-shadow:0 0 0 1px var(--acc)}
.pop{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:var(--acc);font-size:11px;padding:4px 12px;border-radius:999px}
.pname{font-size:14px;color:var(--mut);text-transform:uppercase}.amt{font-size:40px;font-weight:700}.per{color:var(--mut)}
ul{list-style:none;padding:0;margin:0 0 20px;flex:1}li{padding:8px 0 8px 26px;position:relative;font-size:14px;border-bottom:1px solid rgba(255,255,255,.04)}
li:before{content:"\u2713";position:absolute;left:0;color:var(--acc)}.cta{margin-top:auto;width:100%;padding:12px;background:transparent;color:#cdd9ff;border:1px solid var(--acc);border-radius:10px;cursor:pointer;font-size:15px}
.plan.hl .cta{background:var(--acc);color:#fff}
@media(max-width:860px){.grid2{grid-template-columns:1fr}}
</style>
<script>
let timer=null;
document.querySelectorAll('.cta').forEach(b=>b.onclick=async()=>{
 const box=document.getElementById('paybox');box.style.display='block';box.innerHTML='Preparing order\u2026';
 clearInterval(timer);
 const r=await fetch('/v1/order?plan='+b.dataset.plan);const o=await r.json();
 if(o.error){box.textContent=o.error;return;}
 box.innerHTML=
  '<div class="payrow"><span>Plan</span><b>'+o.planName+'</b></div>'+
  '<div class="payrow"><span>Send exactly</span><b class="big">'+o.amountUsd+' USDC</b></div>'+
  '<div class="payrow"><span>Network</span><b>Base (ERC-20)</b></div>'+
  '<div class="payrow"><span>To address</span><b>'+o.payTo+'</b></div>'+
  '<p class="sub" style="margin-top:12px">Send the <b>exact</b> amount from any exchange or wallet (Coinbase / Binance / MetaMask\u2026). Order expires in 60 minutes.</p>'+
  '<div id="pstatus" class="sub">Waiting for payment\u2026 (confirming automatically)</div>';
 timer=setInterval(async()=>{
  const c=await (await fetch('/v1/order/check?id='+o.orderId)).json();
  if(c.status==='paid'){clearInterval(timer);document.getElementById('pstatus').innerHTML='\u2705 Payment confirmed. Your access key: <b>'+c.accessKey+'</b> \u2014 save it and open the <a href="/dashboard">Dashboard</a>.';}
  else if(c.status==='expired'){clearInterval(timer);document.getElementById('pstatus').textContent='Order expired. Please start again.';}
 },6000);
});
<\/script>`);
}
__name(renderPricing, "renderPricing");
function renderDashboard() {
  return shell("Dashboard \xB7 App Store Change Intelligence", `
<h1>App intelligence dashboard</h1><p class="sub"><a href="/pricing">Plans</a> \xB7 <a href="/">Home</a></p>
<div id="lv"><div class="row"><input id="key" placeholder="Paste access key (sci_)" style="flex:1"><button onclick="connect()">Open</button></div><p class="sub" id="lerr"></p></div>
<div id="app" style="display:none">
<div class="row" style="justify-content:space-between"><div><span class="pill" id="plan"></span><span class="pill" id="exp"></span><span class="pill" id="cnt"></span></div><button id="rb" onclick="refreshAll()">Refresh all</button></div>
<div class="row" style="margin:12px 0"><input id="nt" placeholder="App Store numeric id" style="flex:1"><button onclick="addT()">Add app</button></div>
<div id="list"></div>
<div class="card"><b>Webhook</b><input id="wh" style="width:100%;margin-top:6px"><b style="display:block;margin-top:10px">Email</b><input id="em" style="width:100%;margin-top:6px"><div style="margin-top:10px"><button class="ghost" onclick="saveS()">Save</button></div></div>
</div>
<script>
let st=null;const $=id=>document.getElementById(id);
function connect(){fetch('/v1/watch?key='+encodeURIComponent($('key').value.trim())).then(r=>r.json()).then(d=>{if(d.error){$('lerr').textContent=d.error;return;}st=d;$('lv').style.display='none';$('app').style.display='block';render();});}
function render(){$('plan').textContent=st.plan;$('exp').textContent=(st.active?'':'EXPIRED ')+st.expiresAt.slice(0,10);$('cnt').textContent=st.targets.length+' apps';$('wh').value=st.webhookUrl;$('em').value=st.alertEmail;
 $('list').innerHTML=st.targets.length?st.targets.map(t=>'<div class="card"><b>'+t.target+'</b> <span class="muted">'+(t.lastChecked||'not checked')+'</span><div class="row" style="margin-top:8px"><button class="ghost" onclick="refreshOne(\\''+t.target+'\\')">Check</button><button class="ghost" onclick="rm(\\''+t.target+'\\')">Remove</button></div></div>').join(''):'<p class="muted">Add your first app.</p>';}
function post(p,b){return fetch(p,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(b)}).then(r=>r.json());}
function addT(){post('/v1/watch/add?key='+encodeURIComponent(st.accessKey),{target:$('nt').value.trim()}).then(d=>{if(!d.error){st=d;$('nt').value='';render();}});}
function rm(x){post('/v1/watch/remove?key='+encodeURIComponent(st.accessKey),{target:x}).then(d=>{if(!d.error){st=d;render();}});}
function refreshOne(x){fetch('/v1/watch/refresh?key='+encodeURIComponent(st.accessKey)+'&target='+encodeURIComponent(x)).then(r=>r.json()).then(d=>{if(!d.error){st=d;render();}});}
function refreshAll(){$('rb').textContent='\u2026';fetch('/v1/watch/refresh?key='+encodeURIComponent(st.accessKey)).then(r=>r.json()).then(d=>{if(!d.error){st=d;render();}}).finally(()=>$('rb').textContent='Refresh all');}
function saveS(){post('/v1/watch/settings?key='+encodeURIComponent(st.accessKey),{webhookUrl:$('wh').value.trim(),alertEmail:$('em').value.trim()}).then(()=>alert('Saved'));}
<\/script>`);
}
__name(renderDashboard, "renderDashboard");
function renderStatus(name, probeTarget) {
  return shell("Status \xB7 " + name, `
<h1>System status</h1><p class="sub">Live checks run from your browser. <a href="/">Home</a></p>
<div id="rows" class="card"></div>
<p class="muted" id="updated"></p>
<script>
const checks=[
 ['API','/health'],
 ['Snapshot (data source)','/v1/snapshot?target='+encodeURIComponent(${JSON.stringify(probeTarget)})],
 ['MCP endpoint','/mcp'],
 ['Docs','/docs'],
];
async function probe([label,u]){
 const t0=performance.now();let ok=false,code='',ms=0;
 try{const c=new AbortController();setTimeout(()=>c.abort(),8000);
  const r=await fetch(u,{method:'GET',signal:c.signal});code=r.status;ms=Math.round(performance.now()-t0);
  ok=r.status===200||r.status===400||r.status===405||r.status===402||r.status===406;}
 catch(e){code='ERR';}
 return {label,ok,code,ms};
}
(async()=>{
 const res=await Promise.all(checks.map(probe));
 document.getElementById('rows').innerHTML=res.map(x=>
  '<div class="row" style="justify-content:space-between;padding:10px 0;border-bottom:1px solid rgba(255,255,255,.05)">'+
  '<span>'+x.label+'</span><span style="color:'+(x.ok?'#56d364':'#ff7b72')+'">'+(x.ok?'\u25CF Operational':'\u25CF Down')+' <span class="muted">'+x.code+(x.ms?' \xB7 '+x.ms+'ms':'')+'</span></span></div>').join('');
 document.getElementById('updated').textContent='Updated '+new Date().toUTCString();
})();
<\/script>`);
}
__name(renderStatus, "renderStatus");
function renderLegal(title2, cfg2) {
  const email = cfg2.CONTACT_EMAIL;
  const body = title2.startsWith("Privacy") ? "<p>We process the public app id you query and review metadata already public on the App Store. Payments settle peer-to-peer in USDC via x402; we do not collect cards. We do not sell personal data.</p>" : title2.startsWith("Terms") ? '<p>Data is read from public App Store feeds and provided "as is". Use lawfully; no circumvention of limits/payments. Paid requests in USDC on Base are generally non-refundable once delivered.</p>' : `<p>General, security or abuse reports: <a href="mailto:${email}">${email}</a>.</p>`;
  return shell(title2, `<h1>${title2}</h1><p class="muted">Last updated 2026-10-01 \xB7 <a href="/">Home</a></p>${body}`);
}
__name(renderLegal, "renderLegal");

// src/adapter.js
var ID = "app-intel";
var TITLE = "App Store Change Intelligence";
var VERSION = "1.0.0";
var BLOCKED_SUB = ["localhost", "127.", "0.0.", "10.", "192.", "169.", "::1", ".internal", "metadata", "example.com"];
function safeHandle(h) {
  if (typeof h !== "string") return "";
  const s = h.trim().toLowerCase();
  if (s.length > 80 || /[^a-z0-9_\-.:]/.test(s)) return "";
  if (BLOCKED_SUB.some((b) => s.includes(b))) return "";
  return s;
}
__name(safeHandle, "safeHandle");
function parseTarget(input) {
  const s = safeHandle(input);
  if (!s) return null;
  let m = s.match(/(?:id)?(\d{5,})$/);
  if (!m) return null;
  return { platform: "appstore", handle: m[1] };
}
__name(parseTarget, "parseTarget");
async function getJson(u) {
  const r = await fetch(u, { headers: { "user-agent": "intel-kernel/1.0" } });
  if (!r.ok) throw new Error("upstream_" + r.status);
  return r.json();
}
__name(getJson, "getJson");
async function fetchMeta(id) {
  const d = await getJson(`https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}`);
  const x = d.results && d.results[0];
  if (!x) throw new Error("app_not_found");
  return { id, name: x.trackName, version: x.version, rating: x.averageUserRating, ratingCount: x.userRatingCount, seller: x.sellerName };
}
__name(fetchMeta, "fetchMeta");
function normReview(e) {
  const id = e.id?.label || e.id?.["im:id"] || "";
  return {
    reviewId: String(id).split("/").pop() || id,
    rating: Number(e["im:rating"]?.label ?? 0),
    title: e.title?.label || "",
    author: e.author?.name?.label || "",
    updated: e.updated?.label || ""
  };
}
__name(normReview, "normReview");
async function fetchSnapshot({ handle }) {
  const id = handle;
  const meta = await fetchMeta(id);
  const url = `https://itunes.apple.com/us/rss/customerreviews/id=${encodeURIComponent(id)}/sortBy=mostRecent/json`;
  const d = await getJson(url);
  const entries = Array.isArray(d.feed?.entry) ? d.feed.entry : [];
  const items = entries.slice(1).map(normReview);
  return { platform: "appstore", handle: id, meta, items };
}
__name(fetchSnapshot, "fetchSnapshot");
function diff(prev, curr) {
  const out = [];
  const byId = new Map(prev.map((x) => [x.reviewId, x]));
  const curIds = new Set(curr.map((x) => x.reviewId));
  for (const c of curr) {
    const old = byId.get(c.reviewId);
    if (!old) {
      out.push({ changeType: c.rating <= 2 ? "new_negative_review" : "new_review", reviewId: c.reviewId, rating: c.rating, title: c.title });
    }
  }
  for (const p of prev) if (!curIds.has(p.reviewId)) out.push({ changeType: "review_removed", reviewId: p.reviewId, title: p.title });
  return out;
}
__name(diff, "diff");
function buildReport(meta, items, changes) {
  const neg = items.filter((x) => x.rating <= 2).length;
  const recentNeg = changes.filter((c) => c.changeType === "new_negative_review").length;
  return {
    app: meta.name,
    version: meta.version,
    rating: meta.rating,
    totalReviewsSampled: items.length,
    negativeInSample: neg,
    newChanges: changes.length,
    newNegative: recentNeg,
    takeaways: [
      recentNeg > 0 ? `\u26A0\uFE0F ${recentNeg} new negative review(s) \u2014 possible issue after v${meta.version}` : "No new negative reviews in latest sample",
      `Current average rating ${meta.rating} across ${meta.ratingCount} ratings`,
      neg > items.length * 0.3 ? "High share of negative recent reviews; investigate top complaints" : "Recent sentiment is mostly positive"
    ]
  };
}
__name(buildReport, "buildReport");
function kvKey(platform2, handle) {
  return `snap-${platform2}-${handle}`;
}
__name(kvKey, "kvKey");
var adapter = {
  id: ID,
  title: TITLE,
  version: VERSION,
  safeHandle,
  parseTarget,
  fetchSnapshot,
  diff,
  kvKey,
  async snapshot(t) {
    const s = await fetchSnapshot(t);
    return { platform: s.platform, target: s.handle, app: s.meta.name, version: s.meta.version, rating: s.meta.rating, recentReviews: s.items.length, sample: s.items.slice(0, 20) };
  },
  planFeatures: {
    pro: ["Track up to 25 apps", "New review & rating alerts", "Negative-review watch", "All paid MCP tools", "Email + webhook"],
    business: ["Track up to 150 apps", "10 team seats", "Higher API limits", "Version & sentiment reports", "Priority support"],
    enterprise: ["Unlimited apps & seats", "Custom signals & private feeds", "SLA & onboarding", "SSO & advanced controls", "Dedicated reports"]
  },
  mcpTools: [
    {
      name: "app_snapshot",
      description: "Free \u2014 current version, rating and recent reviews for an App Store app. Target = numeric app id.",
      inputSchema: { type: "object", properties: { target: { type: "string" } }, required: ["target"] },
      price: /* @__PURE__ */ __name(() => 0, "price"),
      run: /* @__PURE__ */ __name(async (a) => await adapter.snapshot(parseTarget(a.target)), "run")
    },
    {
      name: "app_review_changes",
      description: 'PAID ($0.05 USDC on Base via x402). Review change detection vs history: new reviews, removed reviews, and flags every new negative review (1-2 stars). Use for "did our app get bad reviews", review monitoring, complaint/bug outbreak alerts, reputation-risk tracking after a release.',
      inputSchema: { type: "object", properties: { target: { type: "string" } }, required: ["target"] },
      price: /* @__PURE__ */ __name(() => 0.05, "price"),
      run: /* @__PURE__ */ __name(async (a, env3) => adapter._changes(a.target), "run")
    },
    {
      name: "app_intel_report",
      description: "$0.50 \u2014 sentiment & negative-review report with takeaways.",
      inputSchema: { type: "object", properties: { target: { type: "string" } }, required: ["target"] },
      price: /* @__PURE__ */ __name(() => 0.5, "price"),
      run: /* @__PURE__ */ __name(async (a) => adapter._report(a.target), "run")
    },
    {
      name: "app_batch_scan",
      description: "$0.03/app \u2014 scan up to 50 App Store apps (version, rating, recent negatives).",
      inputSchema: { type: "object", properties: { targets: { type: "array", items: { type: "string" } } }, required: ["targets"] },
      price: /* @__PURE__ */ __name((a) => (a.targets || []).slice(0, 50).length * 0.03, "price"),
      run: /* @__PURE__ */ __name(async (a) => adapter._batch(a.targets), "run")
    },
    {
      name: "app_landscape",
      description: "$5 \u2014 app landscape across up to 10 apps with rating ranking and risk flags.",
      inputSchema: { type: "object", properties: { targets: { type: "array", items: { type: "string" } } }, required: ["targets"] },
      price: /* @__PURE__ */ __name(() => 5, "price"),
      run: /* @__PURE__ */ __name(async (a) => adapter._landscape(a.targets), "run")
    }
  ],
  async _changes(targetStr) {
    const t = parseTarget(targetStr);
    const s = await fetchSnapshot(t);
    return { target: s.handle, app: s.meta.name, note: "first_snapshot_baseline", recent: s.items.slice(0, 20) };
  },
  winEvidence(kind, args, result) {
    const d = result?.data ?? result;
    if (kind === "changes") return `Checked reviews for ${args.target}: ${d.recent?.length || 0} recent reviews fetched`;
    if (kind === "intel") return `Sentiment & negative-review report for ${args.target}`;
    if (kind === "batch") return `Scanned ${d.scanned ?? (args.targets || []).length} apps`;
    if (kind === "landscape") return `Landscape across ${(args.targets || []).length} apps`;
    return `${kind} call`;
  },
  cliAttribution: `${TITLE} \u2014 free via x402 \xB7 remove attribution with Hobby $9/mo`,
  async _report(targetStr) {
    const t = parseTarget(targetStr);
    const s = await fetchSnapshot(t);
    return buildReport(s.meta, s.items, []);
  },
  async _batch(targets) {
    const list = Array.isArray(targets) ? targets.slice(0, 50) : [];
    const out = [];
    await Promise.all(list.map(async (raw) => {
      const t = parseTarget(raw);
      if (!t) return;
      try {
        const s = await fetchSnapshot(t);
        const neg = s.items.filter((x) => x.rating <= 2).length;
        out.push({ target: s.handle, app: s.meta.name, version: s.meta.version, rating: s.meta.rating, recentReviews: s.items.length, recentNegative: neg });
      } catch (e) {
        out.push({ target: raw, error: String(e?.message || e) });
      }
    }));
    return { scanned: out.length, apps: out };
  },
  async _landscape(targets) {
    const list = Array.isArray(targets) ? targets.slice(0, 10) : [];
    const b = await adapter._batch(list);
    const ranked = b.apps.filter((x) => !x.error).sort((x, y) => (y.rating || 0) - (x.rating || 0));
    return {
      compared: ranked.length,
      ranking: ranked.map((x, i) => ({ rank: i + 1, app: x.app, rating: x.rating, version: x.version, recentNegative: x.recentNegative })),
      takeaways: ranked.length ? [
        `Highest rated: ${ranked[0].app} (${ranked[0].rating})`,
        ranked[ranked.length - 1] ? `Watch: ${ranked[ranked.length - 1].app} has the lowest rating in this set` : "",
        ranked.filter((x) => x.recentNegative > 2).map((x) => `\u26A0\uFE0F ${x.app} has ${x.recentNegative} recent negative reviews`).join("; ") || "No app shows a spike in recent negative reviews"
      ].filter(Boolean) : []
    };
  },
  llmsTxt: /* @__PURE__ */ __name((c) => `# ${TITLE}

> Track public App Store apps: new reviews, ratings, version updates. Free snapshot; paid intel in USDC via x402 on Base.

- MCP: https://${c.HOST}/mcp
- Free: https://${c.HOST}/v1/snapshot?target=389801252
- Docs: https://${c.HOST}/docs

## When to use
- An agent needs to know if an app just got new negative reviews or a version update.
- A team wants review sentiment and rating signals across a portfolio of apps.

## Tools
- app_snapshot: free
- app_review_changes: $0.05 \u2014 new/removed reviews, negative-review flags
- app_intel_report: $0.50 \u2014 sentiment & negative-review report
- app_batch_scan: $0.03 per app (up to 50)
- app_landscape: $5 (up to 10 apps)

## Example asks
- "Did this app get new negative reviews today?"
- "What's the rating trend for this app?"
- "Rank these apps by rating and flag risk."

Target syntax: numeric App Store ID. Paid calls settle USDC on Base with x402, or pay directly (no AI wallet required).
`, "llmsTxt"),
  docsMd: /* @__PURE__ */ __name((c) => `# ${TITLE} \u2014 Documentation

A paid change-intelligence API for public App Store apps, designed to be called by AI agents and automation.

## Endpoints
| Endpoint | Price | Returns |
|---|---|---|
| GET /v1/snapshot?target=<appId> | free | version, rating, recent reviews |
| app_review_changes | $0.05 | new/removed reviews vs history, negative flags |
| app_intel_report | $0.50 | sentiment & negative-review report |
| app_batch_scan | $0.03/app | up to 50 apps in one call |
| app_landscape | $5 | rating ranking across up to 10 apps, risk flags |

## Target format
The numeric App Store app ID, for example \`389801252\` (Instagram).

## Payment
- Agents: unpaid calls return HTTP 402 with a base64 PAYMENT-REQUIRED header; settle USDC on Base via x402 and retry. P2P, 0% commission.
- Humans: choose a plan on /pricing, send the exact USDC amount shown, and the access key is issued automatically \u2014 no card or AI wallet needed.
- One access key works across the whole change-intelligence product family.

## Subscriptions
Pro $99/month (25 apps), Business $499/month (150), Enterprise $2000/month (unlimited). Continuous watch and change alerts.

MCP endpoint (Streamable HTTP): https://${c.HOST}/mcp
`, "docsMd"),
  sitemapXml: /* @__PURE__ */ __name((c) => `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://${c.HOST}/</loc></url><url><loc>https://${c.HOST}/pricing</loc></url><url><loc>https://${c.HOST}/docs</loc></url><url><loc>https://${c.HOST}/dashboard</loc></url></urlset>`, "sitemapXml"),
  wellKnown: /* @__PURE__ */ __name((c) => ({
    x402Version: 1,
    network: c.NETWORK,
    chainId: c.CHAIN_ID,
    asset: c.USDC_BASE,
    payTo: c.PAY_TO,
    facilitator: c.FACILITATOR,
    pricing: { changes: c.PRICE_CHANGES_USD, intel: c.PRICE_INTEL_USD, batchPerApp: c.PRICE_PER_TARGET_USD, landscape: c.PRICE_LANDSCAPE_USD }
  }), "wellKnown"),
  STATUS_TARGET: "389801252",
  renderStatus,
  renderChangelog,
  renderHome,
  renderPricing,
  renderDashboard,
  renderLegal
};

// src/worker.js
var cfg = {
  NETWORK: "base",
  CHAIN_ID: 8453,
  PAY_TO: "0x4873108b2280b7f3EF8cD70cEca3aaBD385f8D6C",
  USDC_BASE: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  FACILITATOR: "https://x402.org/facilitator",
  NETWORK_V2: "eip155:8453",
  FACILITATOR_V2: "https://x402.stablecoin.xyz",
  PRICE_CHANGES_USD: 0.05,
  PRICE_INTEL_USD: 0.5,
  PRICE_PER_TARGET_USD: 0.03,
  BATCH_MAX: 50,
  PRICE_LANDSCAPE_USD: 5,
  LANDSCAPE_MAX: 10,
  KV_BINDING: "INTEL_KV",
  SHARED_BINDING: "SHARED_KV",
  HOST: "app-intel.contentforge-press.workers.dev",
  CONTACT_EMAIL: "contentforge.press@outlook.com",
  ADMIN_KEY: "ba951afdb936eecd4ffb9ddfb1b44b25f47bbab1dfc391ac",
  MAIL_DOMAIN: "mail.contentforge.press"
  // RESEND_API_KEY injected as Worker secret when available
};
var worker_default = createServer(adapter, cfg);

// ../../../../../usr/lib/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var drainBody = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../../../usr/lib/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env3, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env3);
  } catch (e) {
    const error3 = reduceError(e);
    const body = JSON.stringify(error3);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-vIXs31/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = worker_default;

// ../../../../../usr/lib/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_process();
init_virtual_unenv_global_polyfill_cloudflare_unenv_preset_node_console();
init_performance2();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env3, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env3, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env3, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env3, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-vIXs31/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env3, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env3, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env3, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env3, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env3, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env3, ctx) => {
      this.env = env3;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=worker.js.map
