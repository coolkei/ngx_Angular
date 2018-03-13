import { Inject, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';

@Injectable()
export class ROPCService {
  constructor(private httpClient: HttpClient, private oauthService: OAuthService) {}

  async login(username: string, password: string) {
    const profile: any = await this.oauthService.fetchTokenUsingPasswordFlowAndLoadUserProfile(username, password);
    // await this.oauthService.refreshToken();
    return profile;
  }

  logOut() {
    // POST /auth/realms/<realm>/protocol/openid-connect/logout
    //
    // ContentType: x-www-form-urlencoded
    // Data:
    //   - client_id : <client>
    //   - refresh_token : <refresh-token-from-login-token>
    //
    // Headers:
    // - Authorization Bearer <IdToken/accessToken?>

    if (this.oauthService.getRefreshToken() === null) return;

    const refresh_token = this.oauthService.getRefreshToken();
    const access_token = this.oauthService.getAccessToken();

    this.oauthService.logOut(true);

    const body = new HttpParams().set('client_id', this.oauthService.clientId).set('refresh_token', refresh_token);

    return this.httpClient.post(environment.auth.proxyLogoutUrl, body.toString(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Authorization', `Bearer ${access_token}`)
    });
  }
}
