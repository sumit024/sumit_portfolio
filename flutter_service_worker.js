'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "193f4bc8fba6f64fe9334fb2c679c4ac",
"version.json": "c60ef16e5c4a3f00fd39992d41be851d",
"index.html": "87c52ec35d0877d955c5216116b0f02b",
"/": "87c52ec35d0877d955c5216116b0f02b",
"main.dart.js": "6a661a2dc63fa3db9f25bcd954337d34",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bbc0ed4263b43a3b684b89c080d50fff",
".git/config": "f602fa27eb88b954fdaef6d687e72efb",
".git/objects/95/d2c12ef9d2bf001fefdb44d036fb114bef8e6c": "e7ba8dd4d842526070ad1dbba29470c6",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/6f/6306ff4b044fc85fef85a25356b511aaaa2fc7": "f7a73fbdc63ecc739370157638774762",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/56/eecd8a0847f5acb95bbe32d1e3e4c2687ebdbe": "9a4c1c851a64aa3bf78dfae793a4df0f",
".git/objects/51/a46648fa32a65f810dd4313640d8fb219a1827": "168e08e09aa26b0a8fe261d88341cc89",
".git/objects/a4/94e1b69830dd97299d53d382aef8661749a5c6": "a262cd737cb279d5bb90034976fd90e0",
".git/objects/d9/ecf76127baef9bff129817d277ba405ca39a79": "f05db913386342b97ec021f6879e5d2f",
".git/objects/d0/d2e9215f4311f545e0a3ea964e3bbf91f4b6c4": "e2ecc59b260e797331c9e4ddc41a29ce",
".git/objects/be/5443d5877355761b40e57763bb6d916f071842": "dc92c95f6705ce9fbf1b49db75fe3b5a",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/a5/c0ced12da067def65370a459014e11889c81a0": "9e4b4743a183b132fbb8a4e91eeb6a74",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/6e8312a132d2ebe6241ad19c8e11789dfc8e22": "a6595db68522968cb0942563293a47d1",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/ff98e736c1ae22b64aa6793a9214eaab613b7a": "687d1dabd2c7d8984ef448a57aab3632",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/fe1b87f0409828719d540be8849ace50ecf046": "f940e1561fea76115045608cc9a0fd7c",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/c8/ddb361b422d209991b26d1bc5216202541b5f5": "72aa0a9cecd309976c3e3d668728ddc7",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/4e/0d8582b46de1be311b33d09cdecb0fc92807ea": "571cba0a047750de249d8819a59d3f8a",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/83fd498b877b69f37d2f200fe286fd797ab353": "637b141000d35847ce98daf1dd8c5ed7",
".git/objects/4b/73b0661f81189416b7c8a888da6fd8c0c52706": "c4e31c10e91865808a2143ba9c6e3a8c",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/74/7560d81a2f0b7ebd31114e3a901a63dcc1ae40": "4146823f3608a06f30a378f46e00a9d7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/ad8c96f14cdd73d78920100b0c6e46386bfa67": "7616d6cff285b193a31599bb46dedc13",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/ec0d13d172585c5e8188778f7c5a4c23e1d90c": "199dc5e0b1ede84647baff0c57b392f1",
".git/objects/6e/a98f0cfed85be2b27d7d6a5c8fe0caa6a82027": "30ab5032c14f3965b0dda359bf23443e",
".git/objects/09/762b5f129650b5f210bc142d5b82e46b28e9b0": "4af6661822add33bc9fd4dc3ba19f7a3",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dd/84ede74cdecfda62e044e0ce56a9370590156c": "ee9177453d09ad9a320428d50e9d8d9d",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/a88f5ccffb5094f87b2ddaf413f60271718786": "56b9e318a3b78076ccab01e256db6e7a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/577432a567ba144d780ea9793c859ce154ee7b": "4301199cdab73e1ff25e8d9ffe42351f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e8/59cf0203ea70b41774ce27466f03094338ea66": "6e1de63ecdbf152536719de03b10eb04",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/ce/4a863025538fa04c12fbe41479c553a67c2a60": "9fdc20c6d8f157da60260c5c834d85e8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/f7ad6ae670fea8037fea50343e1b6e8e2bd0dd": "193c2ef364fd9a73f24472a0cb027987",
".git/objects/48/48b33b7a05e5d8a33acc0fc3c31611259eb989": "62d3ec78dc656aa9691d148912a2bc91",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/1d/e1b4bba431e811bebac52324844e7b9532160e": "add6a64ac441586f47ca1e1d63dcfc4f",
".git/objects/47/fc1e1a2a4fa619f43233237dbbb99c41103860": "1da07eac6d8dc39f87c8b44b1a1e3298",
".git/objects/78/629e218f1c3420ee21526edd2ff59f8fd0a4c6": "24fc9495db2420ecdb34b04a4d353ad0",
".git/objects/13/1e84f456d9932c9949f5f6d6a3764e4fcf6223": "a9362654bec4622e817f4153360c4454",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/22/e45fb5d524a9628d282ca77ef80a2607f05447": "cffa829eea102834aef42e09d4adefc0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3af8d35cb13d8e142208b3dac4a63fe1",
".git/logs/refs/heads/main": "3af8d35cb13d8e142208b3dac4a63fe1",
".git/logs/refs/remotes/origin/main": "e66e746752fcfc1353eac1b09d0d8084",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a4486965717ab748cca0abad7ef39267",
".git/refs/remotes/origin/main": "a4486965717ab748cca0abad7ef39267",
".git/index": "3950cf18f1992528621109d0758acd72",
".git/COMMIT_EDITMSG": "d541413f51d238976c9f09109df3194d",
"assets/AssetManifest.json": "cedcfff2bad810fb04493c088f7892ad",
"assets/NOTICES": "2054487b4f9d785b06b9060bbdff7b87",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "638e287932b8c4b0de817525b5cb426e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b6fc91125e13a9ab7f5e451b4ccd6d1a",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/images/github.png": "8850b886fdeffa566909a44548567b0b",
"assets/assets/images/starry_night.gif": "8a61d5e4c99953c77552c7266159e2ce",
"assets/assets/images/gmail.png": "eabc1a70245f1384e30960f25f9b2784",
"assets/assets/images/flutter_dev.png": "2f11dc1ceca092e691871da23d9e6138",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/call.png": "e32444726264e197038d4e56a63758f1",
"assets/assets/images/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/assets/images/cv.png": "0685d0f7b808db9e5a71e0d0a02d997d",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
