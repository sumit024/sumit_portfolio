'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8efd00c3933b6f71dd1be2377868328e",
".git/config": "7ab984d369700b8179eb9c29e1f17e09",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "4f588c3b741fed1c3f0ef3b2b85055e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "47bc824b0f02ab18e47590ed18578861",
".git/logs/refs/heads/main": "3dfce0ff07471d89979633d226f156bf",
".git/logs/refs/remotes/origin/main": "acbd1f8aa158420930c1b092a90e1800",
".git/objects/00/a116d4a41aa0fadfdcfa0db089754d81d25d01": "96bd595a3952b3152572f0d347255d58",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/0f/4df415210cae6fd49f0b72a73996d44fcb7e8d": "8c6f174ede89bb618321a29b5acd2c80",
".git/objects/13/8209a4aef6bb83f9e9065f18d2ad3bcf1a19da": "0c32ec842571005f677a8e1b641f7815",
".git/objects/1a/e2286e7047d52cc21c9c3623c09634dde00bac": "56a1fccf430cd1fe2dcd9f1f12cdeb22",
".git/objects/1f/133657ad5b74f12d5fbada1330a8c98c6ec0d7": "df2d36db0e0c30366f4612f30c45d554",
".git/objects/20/83fd498b877b69f37d2f200fe286fd797ab353": "637b141000d35847ce98daf1dd8c5ed7",
".git/objects/22/e45fb5d524a9628d282ca77ef80a2607f05447": "cffa829eea102834aef42e09d4adefc0",
".git/objects/26/ad8c96f14cdd73d78920100b0c6e46386bfa67": "7616d6cff285b193a31599bb46dedc13",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/33/27d3ac3137a7aafaef7102b2ac2739e6e3bf24": "2ad1cd3258fe367fe1dc598b4b5b2c59",
".git/objects/34/d0c216cc4de7b2ee1c6f0e824a0288db5af068": "e3c54d41b6578552dd4e69eed54038fc",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/e1b4f3ab55b964b9941cb432046efc31dca8b8": "342a83c6fa0f1bc4c0490c028e45f07b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e0dbd810134a6583bda4fdcaeb81f67883287b": "a450b2c122cfa0a7e40523be11ecad5b",
".git/objects/48/2d137189fe0ec610c08a570c8c2b8b518f345b": "66f1dbd2a53ccf233af951ddbe357b36",
".git/objects/4b/73b0661f81189416b7c8a888da6fd8c0c52706": "c4e31c10e91865808a2143ba9c6e3a8c",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/074a7ea59b4fa2d9e2c5f453fc337208a9da70": "27158c8f408ce84a2dd404a2de8d0d1c",
".git/objects/74/7560d81a2f0b7ebd31114e3a901a63dcc1ae40": "4146823f3608a06f30a378f46e00a9d7",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a6/d0f4b072e57e78b42191b88ed4ae7896a4286c": "fb8e658a2697c873f92429e1ba794d90",
".git/objects/a6/edb26876a48ef5b317988a2d80923b79e778e8": "033837627d9577a8b8dd0580759c9262",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d85812a7c568471c1a81c484c5e9f85fa74174": "df1c247039ac6a512249a3c1049883b1",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/577432a567ba144d780ea9793c859ce154ee7b": "4301199cdab73e1ff25e8d9ffe42351f",
".git/objects/b9/9167c2aa3ee3c5194ff3ddc6a903bb179d9857": "9fd6524c884df2807cf6bf89c4c1287b",
".git/objects/b9/df51a3936d3c1504803fea37cddd146adbddb6": "e41b10e2f3c8710cc267d5206c2d0099",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/5443d5877355761b40e57763bb6d916f071842": "dc92c95f6705ce9fbf1b49db75fe3b5a",
".git/objects/cb/b1fd8a63200249a7f79a5970a02ed51f3a7944": "1055652fe9feb27a7f0afae229d9760f",
".git/objects/d0/d2e9215f4311f545e0a3ea964e3bbf91f4b6c4": "e2ecc59b260e797331c9e4ddc41a29ce",
".git/objects/d3/e343667acb42c39d27f989718018ce0d65d3e1": "66f5e734df0169ab51952f81d1ce9325",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/5a84dda589f6a8a1dca5b30313d5b072abb4f8": "26726653e51fdb0f8d07ec35dc770e7f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/159ae9fa9acc357d22c218dfa30c7a3e01e246": "9a9200be59a78c05dd43cd2f10b7179a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "f24b0932aa78de0ef5dc894b079b1ce3",
".git/refs/remotes/origin/main": "f24b0932aa78de0ef5dc894b079b1ce3",
"assets/AssetManifest.bin": "d2a6c96072c879236202c9c50c618ac6",
"assets/AssetManifest.json": "9b0219e7626fd2a306c78fb3e7797b73",
"assets/assets/images/call.png": "e32444726264e197038d4e56a63758f1",
"assets/assets/images/cv.png": "0685d0f7b808db9e5a71e0d0a02d997d",
"assets/assets/images/flutter_dev.png": "2f11dc1ceca092e691871da23d9e6138",
"assets/assets/images/github.png": "8850b886fdeffa566909a44548567b0b",
"assets/assets/images/gmail.png": "eabc1a70245f1384e30960f25f9b2784",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/stars.gif": "959fb1f51bc1026ace27acede55e1bc8",
"assets/assets/images/whatsapp.png": "ec69d1fab1d1b2bd76ab53aab8e982e2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "0158fc8f819e86e2932f451cfd94699b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ccf6f9f33ed41d0f28cda53d76d0cd5b",
"/": "ccf6f9f33ed41d0f28cda53d76d0cd5b",
"main.dart.js": "a972f0c0a13bdbb2387138e8ef28fd21",
"manifest.json": "bbc0ed4263b43a3b684b89c080d50fff",
"version.json": "c60ef16e5c4a3f00fd39992d41be851d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
