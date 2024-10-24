export default function AmazonAffiliate() {
  return (
    <div className="amazon-affiliate">
      <a
        href={`https://www.amazon.com/dp/example-tag?tag=${process.env.AMAZON_AFFILIATE_TAG}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Check out this product on Amazon
      </a>
    </div>
  );
}
