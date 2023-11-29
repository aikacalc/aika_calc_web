import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SwUpdate } from '@angular/service-worker';
import { range } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    // get page(): string {
    //     return location.pathname.replace(/^\//, '');
    // }
    page: string = '';
    buildTimeString: string = '';

    excCos = `比良坂 夜露
	八八式戦闘服
	エーススーツ
	ビビッド
	特攻の黒
	スタープロムナード
	オオカムヅミ
	成子坂作業着
	メリーパーティ
	AEGiS体操着/紺
	チアガール/成子坂
	扶桑皇国海軍制服
	AEGiSジャージ赤
	アナトリア
	コンパニオン/YS
	アニマシオン
	アニバドレス
	生贄の聖衣
================================================================


兼志谷 シタラ
	八八式戦闘服
	エーススーツ
	アワシャ
	バーラタ
	シェラパール
	成子坂作業着
	メリーパーティ
	AEGiS体操着/紺
	コミマ戦闘服/シタラ
	チアガール/成子坂
	ブリタニア空軍制服
	ヴォーパルバニー/R
	うしみちゃんボディ
	BDナース/O
	シルフィーII/S
	デルフィニウム
	アニバドレス
	生贄の聖衣
================================================================


百科 文嘉
	八八式戦闘服
	エーススーツ
	スピン
	ライブラ
	スタープロムナード
	ライラックカーテン
	成子坂作業着
	メリーパーティ
	ヴォーパルバニー
	AEGiS体操着/紺
	チアガール/成子坂
	リベルテ
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


吾妻 楓
	DM00-M
	エーススーツ
	撫子
	明鏡止水
	スタープロムナード
	ブラックオルカ
	メリーパーティ
	AEGiS体操着/紺
	チアガール/成子坂
	扶桑皇国海軍制服
	ノーブルガレルース
	みさきのパーカー
	ヴォーパルバニー
	毛縫
	アニバドレス
	生贄の聖衣
================================================================


日向 リン
	DM00-M
	エーススーツ
	パッション
	コメット
	スタープロムナード
	サン★サンシャイン！
	メリーパーティ
	エクスプローラー/B
	HIGH ROCK
	AEGiS体操着/紺
	チアガール/成子坂
	ユニフォーム/S3
	Mode-B/S
	郷湾体操着
	UBOH
	アニバドレス
	生贄の聖衣
================================================================


小鳥遊 怜
	DM00-M
	エーススーツ
	蒼穹の閃光
	スタープロムナード
	タンキニエブリー
	メリーパーティ
	アマ女体操着/高等部
	AEGiS体操着/紺
	チアガール/成子坂
	アマルテアジャージ
	SUGAMOTシャツ
	アニバドレス
	生贄の聖衣
================================================================


一条 綾香
	DM00-M
	エーススーツV
	ベルベット・キトゥン
	スタープロムナード
	ピンサーフリル
	メリーパーティ
	アマ女体操着/中等部
	AEGiS体操着/赤
	ノーブルガレルース
	コンパニオン/KB
	アニバドレス
	生贄の聖衣
================================================================


相河 愛花
	DM00-M
	エーススーツV
	ホワイトメリー
	ピュアリルサマー
	メリーパーティ
	AEGiS体操着/赤
	ブリタニア空軍制服
	BDナース/B
	デルフィニウム
	コンパニオン/KB
	エーススーツVb
	アニバドレス
	生贄の聖衣
================================================================


小芦 睦海
	八八式戦闘服
	エーススーツV
	スティルケンプファー
	スタープロムナード
	AEGiS体操着/赤
	ブルースクリーン
	扶桑皇国海軍制服
	メリーパーティ
	コンパニオン/KB
	DB光導流水文T
	アニバドレス
	生贄の聖衣
================================================================


二子玉 舞
	八八式戦闘服
	アースタイユール
	シルフィード
	アクトレス・チュチュ
	ヴォーパルバニー
	AEGiS体操着/紺
	バフチサライ
	コミマ戦闘服/舞
	スタープロムナード
	チアガール/成子坂
	ブリタニア空軍制服
	メリーパーティ
	BDナース/AB
	リルームステラ
	アニバドレス
	生贄の聖衣
================================================================


バージニア・G
	八八式戦闘服
	US-ACE/FDN
	トレーニングスタイル
	US-AG1/FDN
	スタープロムナード
	マリンスコーピオ
	AEGiS体操着/紺
	チアガール/成子坂
	ブリタニア空軍制服
	メリーパーティ
	ヴォーパルバニー/B
	びふみちゃんボディ
	BDナース/O
	AEGiSジャージ赤
	リベルテ
	リルームステラ
	アニバドレス
	生贄の聖衣
================================================================


ファティマ・B
	〇〇式戦闘服
	シームルグ
	アールマティ
	メリーパーティ
	ペルマナント
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


四谷 ゆみ
	八八式戦闘服
	エーススーツN
	プラチナライン
	ブランニューブランク
	メリーパーティ
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	AEGiS体操着/紺
	BDナース/B
	フィルギャ
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


藤野 やよい
	〇〇式戦闘服
	パンツスーツ
	エーススーツN
	a.k.a
	STYLE-R
	AEGiS体操着/紺
	カラーバー
	スタープロムナード
	メリーパーティ
	コンパニオン/AF
	エンター・テイン
	アニバドレス
	生贄の聖衣
================================================================


下落合 桃歌
	〇〇式戦闘服
	撮影用制服
	エーススーツN
	カニッシュ
	AEGiS体操着/赤
	サマー☆エンジェル
	スタープロムナード
	メリーパーティ
	キャディウェア
	恋する乙女は無敵なの
	コンパニオン/AF
	エンター・テイン
	アニバドレス
	生贄の聖衣
================================================================


シャーリー・O
	〇〇式戦闘服
	パンツスーツ
	MVシェリフ
	ウエスタンヘンプ
	ローンスター
	スタープロムナード
	びふみちゃんボディT
	AEGiS体操着/紺
	BDナース/B
	サウスウエスト
	メリーパーティ
	ロデオコースト
	コンパニオン/AF
	アニバドレス
	生贄の聖衣
================================================================


伊戸倉 音緒
	〇〇式戦闘服
	エメンタール
	スタープロムナード
	C9カンバー
	コンパニオン/AF
	メリーパーティ
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


依城 えり
	八八式戦闘服
	エーススーツB
	めごい服
	ヒグマ
	スタープロムナード
	スカイフィッシュ
	AEGiS体操着/紺
	扶桑皇国海軍制服
	メリーパーティ
	わんダフルニット
	BDナース/AB
	マニオク
	コンパニオン/KB
	アニバドレス
	生贄の聖衣
================================================================


文島 明日翔
	〇〇式戦闘服
	エーススーツB
	メーテルリンク
	スタープロムナード
	フェザーバニー
	AEGiS体操着/紺
	タイニースカイ
	チアガール/成子坂
	メリーパーティ
	BDナース/B
	コンパニオン/KB
	アニバドレス
	生贄の聖衣
================================================================


大関 小結
	DM00-M
	エーススーツC
	ピナフォア/和
	スタープロムナード
	トコナッツ＆ミルク
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	ブリタニア空軍制服
	メリーパーティ
	うしみちゃんボディ
	AEGiS体操着/紺
	デルフィニウム
	アニバドレス
	生贄の聖衣
================================================================


宇佐元 杏奈
	〇〇式戦闘服
	イーハトーブ
	メアリー・アン
	Cocon
	ヴォーパルバニー
	スモア・シフォン
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	ブリタニア空軍制服
	メリーパーティ
	AEGiS体操着/紺
	AEGiSジャージ赤
	ユニバーサルウィスパ
	みさきのパーカー
	コンパニオン/YS
	ヴォーパルバニーα
	アニバドレス
	生贄の聖衣
================================================================


神宮寺 真理
	〇〇式戦闘服
	パンツスーツ
	アワーグラス
	サーベイ
	エッセンスサーチ
	スタープロムナード
	エクスプローラー/A
	グラファイトナイト
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	扶桑皇国海軍制服
	メリーパーティ
	ルヴニール
	AEGiS体操着/紺
	AEGiSジャージ赤
	アナトリア
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


新谷 芹菜
	〇〇式戦闘服
	パンツスーツ
	ユスティー・シャ
	Nya'C
	シャノアール
	ヴォーパルバニー
	シャノアールバウンド
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	メリーパーティ
	シャンティリー
	AEGiS体操着/紺
	シバルリーチュニック
	AEGiSジャージ赤
	リベルテ
	コンパニオン/AF
	アニバドレス
	生贄の聖衣
================================================================


蛙坂 来弥
	〇〇式戦闘服
	アーバンJK忍装束
	ハスの葉コート
	蛙坂流忍装束
	スタープロムナード
	エクスプローラー/O
	AEGiS体操着/紺
	海装束
	チアガール/成子坂
	扶桑皇国海軍制服
	メリーパーティ
	シバルリーチュニック
	BDナース/O
	みさきのパーカー
	コンパニオン/AF
	郷湾体操着
	ベルゼビュート
	アニバドレス
	生贄の聖衣
================================================================


籠目 深沙希
	〇〇式戦闘服
	クリプトグラフ
	グリーフゴースト
	メリーパーティ
	AEGiS体操着/紺
	チアガール/成子坂B
	AEGiSジャージ青
	フィルギャ
	コンパニオン/AF
	幡ヶ谷婦人会体操着
	アニバドレス
	生贄の聖衣
================================================================


紺堂 地衛理
	〇〇式戦闘服
	エーススーツ
	パンサリ
	シュールコー
	アマ女体操着/高等部
	AEGiS体操着/紺
	スタープロムナード
	チアガール/アマ女
	ヴォーパルバニー
	ヴィアベル
	メリーパーティ
	アマルテアジャージ
	AEGiSジャージ赤
	レーシングスーツBW
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


州天頃 椎奈
	〇〇式戦闘服
	エーススーツ
	しゅうにゃたぁ
	フツヌシ
	アマ女体操着/高等部
	AEGiS体操着/紺
	スタープロムナード
	チアガール/アマ女
	ヴォーパルバニー
	ブリタニア空軍制服
	シークリオ
	メリーパーティ
	BDナース/O
	アマルテアジャージ
	空手道着
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


仁紀藤 奏
	〇〇式戦闘服
	エーススーツ
	ニンブルドクター
	VRZ-R2
	アマ女体操着/高等部
	AEGiS体操着/紺
	スタープロムナード
	チアガール/アマ女
	ヴォーパルバニー
	FOCALOR
	メリーパーティ
	BDナース/B
	アマルテアジャージ
	レーシングスーツBB
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


村尾 未羅
	〇〇式戦闘服
	セニエ
	スタープロムナード
	AEGiSジャージ赤
	ヤム・ハ・メラフ
	コンパニオン/AF
	メリーパーティ
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


君影 唯
	〇〇式戦闘服
	フローラルノート
	スタープロムナード
	AEGiSジャージ赤
	ティップトゥ
	シエル・ドゥ・ニュイ
	コンパニオン/AF
	メリーパーティ
	ブリタニア空軍制服
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


須賀 乙莉
	〇〇式戦闘服
	ストゥーパ
	ワンステップ
	ライジングタワー
	スタープロムナード
	ガラッシア
	チアガール/成子坂
	メリーパーティ
	AEGiSジャージ赤
	コンパニオン/AF
	扶桑皇国海軍制服
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


萬場 盟華
	〇〇式戦闘服
	エーススーツM
	ゴージャスピンク+2
	ピンサーバニー
	サマーパンサー
	スタープロムナード
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	メリーパーティ
	AEGiS体操着/紺
	BDナース/B
	AEGiSジャージ赤
	コンパニオン/AF
	アニバドレス
	生贄の聖衣
================================================================


九炉鉄 悠都
	〇〇式戦闘服
	伊織
	エイサーサッカラム
	ブラックスミス
	スタープロムナード
	カルトアイゼン
	ユニフォーム/S9V
	コンパニオン/YS
	メリーパーティ
	扶桑皇国海軍制服
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


琴村 朱音
	〇〇式戦闘服
	エーススーツVD
	オニアザミ・艮
	スタープロムナード
	チアガール/成子坂
	メリーパーティ
	サルジ・ヴェレ
	AEGiS体操着/紺
	エクスプローラー/A
	アニバドレス
	生贄の聖衣
================================================================


琴村 天音
	〇〇式戦闘服
	エーススーツVD
	オニアザミ・坤
	スタープロムナード
	チアガール/成子坂
	メリーパーティ
	ガーネ・ヴェレ
	AEGiS体操着/紺
	エクスプローラー/A
	アニバドレス
	生贄の聖衣
================================================================


サンティ・R
	〇〇式戦闘服
	AEGiS第2種夏服
	RGRスーツ
	アミュレ
	ソブリンズガード
	スタープロムナード
	サマーガーディアン
	メリーパーティ
	セト
	びふみちゃんボディ
	AEGiS体操着/紺
	AEGiSジャージ青
	No8バトルドレス
	アニバドレス
	生贄の聖衣
================================================================


ニーナ・K
	〇〇式戦闘服
	AEGiS第2種夏服
	グランインターリ
	フシグダー
	インターリ
	スタープロムナード
	ブリタニア空軍制服
	プリャーシ
	メリーパーティ
	AEGiS体操着/紺
	BDナース/AB
	ユカ
	ヴィチローク
	アニバドレス
	生贄の聖衣
================================================================


王 紅花
	〇〇式戦闘服
	パンツスーツ/紅龍苑
	蓮歩
	パオズ
	王龍
	AEGiS体操着/紺
	チャイニーメイニー
	扶桑皇国海軍制服
	メリーパーティ
	びふみちゃんボディ
	BDナース/O
	バトルウェア
	アニバドレス
	生贄の聖衣
================================================================


ミア・V
	〇〇式戦闘服
	シュイヴァン
	エクスプローラー/A
	プラージュ
	コンパニオン/KB
	メリーパーティ
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


千島 美幸
	〇〇式戦闘服
	弦音
	御巫
	ウミアザミ
	コンパニオン/KB
	祭り法被
	メリーパーティ
	扶桑皇国海軍制服
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


東雲 チヱ
	〇〇式戦闘服
	別れ霜
	彼岸過
	ワクト
	スタープロムナード
	リリアン・シルキー
	メリーパーティ
	りふれいん
	扶桑皇国海軍制服
	BDナース/B
	ナガレ
	アニバドレス
	生贄の聖衣
================================================================


御蔵座 梓希
	〇〇式戦闘服
	ジュニアスーツ試作型
	大納言
	スタープロムナード
	BDナース/O
	リリアン・コットン
	メリーパーティ
	扶桑皇国海軍制服
	アニバドレス
	生贄の聖衣
================================================================


山野 薫子
	DM00-A
	エーススーツK
	ファストゥイレーヌ
	スタープロムナード
	幡ヶ谷婦人会体操着
	チアガール/成子坂B
	マランラメール
	メリーパーティ
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


二階堂 司
	〇〇式戦闘服
	パンツスーツ
	エーススーツKT
	リプレース
	ニッカーボッカーズ
	BDナース/AB
	インテンショナル
	ティーアップ
	メリーパーティ
	AEGiS体操着/紺
	ティーアップ
	幡ヶ谷婦人会体操着
	シーショアサーフ
	アニバドレス
	生贄の聖衣
================================================================


御茶ノ水 美里江
	〇〇式戦闘服
	プリムス
	R.U.R.
	チアガール/成子坂
	メリーパーティ
	AEGiS体操着/紺
	ガラテア
	祭り法被
	ヴォーパルバニー/G
	アニバドレス
	生贄の聖衣
================================================================


米良渕 花浪
	〇〇式戦闘服
	グランシュレム
	郷湾体操着
	AEGiS体操着/紺
================================================================


リタ・H
	〇〇式戦闘服
	パンツスーツ
	アンファング
	成子坂作業着
	RHフリーガーヤッケ
	オストゼー
	メリーパーティ
	うしみちゃんボディ
	AEGiS体操着/紺
	チアガール/成子坂
	アナトリア
	トレッフェン
	レーシングスーツBG
	コンパニオン/YS
	アニバドレス
	生贄の聖衣
================================================================


金潟 すぐみ
	〇〇式戦闘服
	アンソニー
	イマージン
	ターミガン
	スタープロムナード
	扶桑皇国海軍制服
	アンフィビアス
	AEGiS体操着/紺
	メリーパーティ
	エクスプローラー/A
	アニバドレス
	生贄の聖衣
================================================================


新居目 安里
	〇〇式戦闘服
	トゥブー
	リップル
	アビサルスキン
	スタープロムナード
	ブリタニア空軍制服
	ダイブルー
	AEGiS体操着/紺
	BDナース/AB
	カサーバ
	メリーパーティ
	エクスプローラー/AB
	水域大海洋科学部T
	アニバドレス
	生贄の聖衣
================================================================


的場 アオイ
	〇〇式戦闘服
	ステミング
	エリクシル
	ぺルラネグラ
	ブルゾン/神南サポ
	メリーパーティ
	アニバドレス
	生贄の聖衣
================================================================


在賀 奈々
	〇〇式戦闘服
	ケセド
	スターヴァーグ
	ブルゾン/神南サポ
	メリーパーティ
	アニバドレス
	生贄の聖衣
================================================================


宮南 ひかり
	〇〇式戦闘服
	上野芸術大学白衣
	カラクルール
	アラプリマ
	イリスパレット
	シージュエル
	コンパニオン/KB
	扶桑皇国海軍制服
	AEGiS体操着/紺
	BDナース/AB
	メリーパーティ
	アニバドレス
	生贄の聖衣
================================================================


我龍 絵美
	〇〇式戦闘服
	ヨサリ
	オーシャンインク
	コンパニオン/KB
	扶桑皇国海軍制服
	AEGiS体操着/紺
	BDナース/O
	メリーパーティ
	アニバドレス
	生贄の聖衣
================================================================


天狐 天
	〇〇式戦闘服
	上野芸術大学白衣
	フラクタル
	ガエン
	アルヒ
	コースティクス
	祭り法被
	コンパニオン/KB
	メリーパーティ
	扶桑皇国海軍制服
	AEGiS体操着/紺
	アニバドレス
	生贄の聖衣
================================================================


波佐見 利佳
	〇〇式戦闘服
	パンツスーツ
	ソーン
	エスピス・メガス
	作業着/はさみメンテ
	メリーパーティ
	BDナース/B
	生贄の聖衣
================================================================


春日丘 もえ
	〇〇式戦闘服
	ハッピーマーチ
	エスピス
	作業着/はさみメンテ
	扶桑皇国海軍制服
	AEGiS体操着/紺
	メリーパーティ
	アニバドレス
	生贄の聖衣
================================================================


アデライーデ・B
	〇〇式戦闘服
	リーコンPC
	シュヴァルツナーゼ
	シュヴァイツァガルデ
	メリーパーティ
	生贄の聖衣
================================================================


轟雷
================================================================


スティレット
================================================================


バーゼラルド
================================================================


フレズヴェルク
================================================================


SOL ラプター
================================================================


宮藤 芳佳
	扶桑皇国海軍制服
	八八式戦闘服
	コスチューム
================================================================


リネット・B
	ブリタニア空軍制服
	八八式戦闘服
	コスチューム
	バブルフラワー
================================================================


ゲルトルート・B
	八八式戦闘服
	ラピッドフロー
================================================================


エーリカ・H
	カールスラント軍服
	八八式戦闘服
	コスチューム
	ブラックコーラル
================================================================


坂本 美緒
	ホワイトクラウンズ
	扶桑皇国海軍制服
	八八式戦闘服
	コスチューム
	シャークノワール
================================================================


ペリーヌ・C
	ガリア空軍制服
	八八式戦闘服
	コスチューム
	セレスト・シャープ
================================================================


星月 みき
	星衣フローラ
	サマーオーシャン
================================================================


常磐 くるみ
	星衣フローラ
================================================================


粒咲 あんこ
	星衣フローラ
================================================================


楠 明日葉
	星衣フローラ
================================================================


綿木 ミシェル
	星衣フローラ
	フリルスプラッシュ
================================================================


サドネ
	星衣フローラ
================================================================


煌上 花音
	星衣フローラ
	オンダネーロ
	アイドル衣装
================================================================


国枝 詩穂
	星衣フローラ
	オンダビアンコ
	アイドル衣装
================================================================


かすみ
	おめかしワンピ
	瑠璃光
	ネモフィラ
================================================================


マリー・ローズ
	キムリック
	ミヌエット
================================================================


シルフィーII
================================================================


シルフィーII Mode-B
================================================================


アヤ
	殺戮人形
================================================================


ユキ
	殺戮人形
	ユキの水着
================================================================


ヤマダ
	ヤマダの私服
	殺戮人形
	ヤマダの水着
================================================================


AIT
	パイロットスーツ
	ガワナカ星系スーツ
================================================================


牧瀬 紅莉栖
	〇〇式戦闘服
	菖蒲院女子学園制服改
	メリーパーティ
================================================================


阿万音 鈴羽
	〇〇式戦闘服
	ヴィンテージジャージ
	メリーパーティ
================================================================


`;

    constructor(
        public service: AppService,
        private swUpdate: SwUpdate
    ) {
        this.buildTimeString = environment.buildTime;
    }

    ngOnInit(): void {
        this.swUpdate.available.subscribe(() => {
            this.service.hasNewUpdate = true;
        });
    }

    temphpcalc(): void {
        // chara
        let charaLv = 0;
        let charaGradeup = 0;
        let charaMinHP = 0;
        let charaMaxHP = 0;

        // gears
        let shotGears = [];
        let closeGears = [];
        let topGears = [
            {
                minLv: 0,
                maxLv: 0,
                minHP: 0,
                maxHP: 0,
                minQuality: 0,
                maxQuality: 0,
            }
        ]
        let bottomGears = [
            {
                minLv: 0,
                maxLv: 0,
                minHP: 0,
                maxHP: 0,
            }
        ]
        let shotcustomKits = [
            0.3, 0.5, 0.7
        ];

        const calcSet = {
            charaBaseHP: 0,
            topGearBaseHP: 0,
            topGearQuality: 0,
            topGearCustomKit: 0,
            bottomGearBaseHP: 0,
            bottomGearCustomKit: 0,
        }
    }
    *combinations(arrOfArr) {
        let [head, ...tail] = arrOfArr
        let remainder = tail.length ? this.combinations(tail) : [[]];
        for (let r of remainder) for (let h of head) yield [h, ...r];
    }
}
