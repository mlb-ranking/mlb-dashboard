import Url from 'url-parse';

// http://mlb.mlb.com/lookup/json/named.search_player_all.bam?sport_code=%27mlb%27&name_part=%27freddie%25freeman%25%27&active_sw=%27Y%27
// http://mlb.mlb.com/lookup/json/named.search_player_all.bam?sport_code=%27mlb%27&name_part=%27freedie%25freeman%25%27&active_sw=%27Y%27
const baseUrl = 'http://mlb.mlb.com/';
const basePath = '/lookup/json/';

/**
 * Generate urls for this service
 *
 * @param opts
 * @returns {Url}
 */
function UrlFactory(opts = {}) {
  const options = Object.assign({}, opts);
  const serviceUrl = new Url(basePath, baseUrl, true);
  serviceUrl.query.sport_code = "'mlb'";
  serviceUrl.query.active_sw = "'Y'";
  serviceUrl.pathname += `${options.endpoint}`;
  return serviceUrl;
}

export class MlbPlayerLookup {

  static defaultOptions = {
    endpoint: 'named.search_player_all.bam',
  };

  constructor(opts) {
    this.options = Object.assign({}, MlbPlayerLookup.defaultOptions, opts);
    this.url = this.getUrl();
  }

  /**
   *
   * @returns {Url}
   */
  getUrl() {
    return UrlFactory(this.options);
  }

  /**
   *
   * @param {Array} terms
   * @returns {MlbPlayerLookup}
   */
  setNames(terms) {
    const url = this.url;
    const termString = terms.length === 1 ? `${terms[0]}` : terms.join('%');
    url.query.name_part = `'${termString}%'`;
    return this;
  }
}


export default {
  MlbPlayerLookup,
};
