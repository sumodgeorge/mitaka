import "mocha";

import { expect } from "chai";

import { OTX } from "@/searcher";

describe("OTX", function () {
  const subject = new OTX();

  it("should support ip, domain and hash", function () {
    expect(subject.supportedTypes).to.deep.equal(["ip", "domain", "hash"]);
  });

  describe("#searchByIP", function () {
    const ip = "1.1.1.1";
    it("should return a URL", function () {
      expect(subject.searchByIP(ip)).to.equal(
        `https://otx.alienvault.com/indicator/ip/${ip}`
      );
    });
  });

  describe("#searchByDomain", function () {
    const domain = "github.com";
    it("should return a URL", function () {
      expect(subject.searchByDomain(domain)).to.equal(
        `https://otx.alienvault.com/indicator/domain/${domain}`
      );
    });
  });

  describe("#searchByHash", function () {
    const hash = "726a2eedb9df3d63ec1b4a7d774a799901f1a2b9";
    it("should return a URL", function () {
      expect(subject.searchByHash(hash)).to.equal(
        `https://otx.alienvault.com/indicator/file/${hash}`
      );
    });
  });
});
