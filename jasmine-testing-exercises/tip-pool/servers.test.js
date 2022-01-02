describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update server name and tip amount", function () {
    submitServerInfo();

    const serverList = document.querySelectorAll("#serverTable tbody tr td");

    expect(serverList[0].innerText).toEqual("Alice");
    expect(serverList[1].innerText).toEqual("$0.00");
  });

  it("should do nothing when server is blank", function () {
    serverNameInput.value = "";
    submitServerInfo();

    expect(serverId).toEqual(0);
    expect(Object.keys(allServers)).toEqual([]); //toEqual uses deep equality, so an empty array will equal an empty array
    expect(serverTbody.childElementCount).toEqual(0); //checking innerHTML for an empty string "" would fail sometimes? Weird. Checking for 0 childElements instead, seems consistent
  });

  afterEach(function () {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
