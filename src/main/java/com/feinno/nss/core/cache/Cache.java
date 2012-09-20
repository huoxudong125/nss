package com.feinno.nss.core.cache;

import java.io.Serializable;
import java.util.List;

import net.sf.ehcache.CacheException;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;
import net.sf.ehcache.ObjectExistsException;
import net.sf.ehcache.Status;
import net.sf.ehcache.distribution.MulticastKeepaliveHeartbeatSender;

/**
 * 使用EhCache缓存
 * 
 * @author wanghui
 * @version 1.0
 * @since 2009-Sep-25
 */
public class Cache {

	private net.sf.ehcache.Cache			cache;

	private static volatile CacheManager	manager;

	private final String					cacheName;

	/**
	 * 初始化EhCache
	 */
	static {
		if (manager == null)
			manager = CacheManager.create();
	}

	/**
	 * 关闭所有的Cache
	 */
	public static void shutdownAll() {
		manager.removalAll();
		manager.shutdown();
	}

	/**
	 * 关闭本Cache
	 */
	public void shutdown() throws IllegalStateException {
		manager.removeCache(cacheName);
	}

	/**
	 * 构造一个指定名字的Cache对象
	 * 
	 * @param cacheName
	 */
	public Cache(String cacheName) throws IllegalStateException, ClassCastException, ObjectExistsException,
			CacheException {
		this.cacheName = cacheName;
		MulticastKeepaliveHeartbeatSender.setHeartBeatInterval(1000);
		manager.addCache(cacheName);
		try {
			// allow cluster to be established
			Thread.sleep(1020);
		} catch (InterruptedException e) {
			throw new CacheException(e);
		}
		cache = manager.getCache(cacheName);
		try {
			waitForPropagate();
		} catch (InterruptedException e) {
			throw new CacheException(e);
		}
	}

	/**
	 * 以类名作为cache的名字构造一个Cache对象
	 * 
	 * @param c
	 */
	public Cache(Class<?> clazz) throws IllegalStateException, ClassCastException, ObjectExistsException,
			CacheException {
		this(clazz.getName());
	}

	/**
	 * 从缓存中获取数据
	 * 
	 * @param key
	 * @return
	 */
	public Object get(Serializable key) throws IllegalStateException, CacheException {
		Element element = cache.get(key);
		if (element == null)
			return null;
		return element.getValue();
	}

	public Object get(Object key) throws IllegalStateException, CacheException {
		Element element = cache.get(key);
		if (element == null)
			return null;
		return element.getValue();
	}

	/**
	 * 将键值对放入缓存
	 * 
	 * @param key
	 * @param value
	 */
	public void put(Serializable key, Object value) throws IllegalStateException, IllegalArgumentException,
			CacheException {
		cache.put(new Element(key, value));
	}

	/**
	 * 将键值对放入缓存
	 * 
	 * @param key
	 * @param value
	 */
	public void put(Object key, Object value) throws IllegalStateException, IllegalArgumentException, CacheException {
		cache.put(new Element(key, value));
	}

	/**
	 * 将键值对放入缓存,仅限本机缓存
	 * 
	 * @param key
	 * @param value
	 */
	public void putWithoutReplication(Serializable key, Object value) throws IllegalStateException,
			IllegalArgumentException, CacheException {
		cache.put(new Element(key, value), true);
	}

	/**
	 * 将键值对放入缓存,仅限本机缓存
	 * 
	 * @param key
	 * @param value
	 */
	public void putWithoutReplication(Object key, Object value) throws IllegalStateException, IllegalArgumentException,
			CacheException {
		cache.put(new Element(key, value), true);
	}

	/**
	 * 将键值对放入缓存,并指定键值存在的时间
	 * 
	 * @param key
	 * @param value
	 * @param timeToLive 数据有效时间(不要超过一个月)
	 */
	public void put(Serializable key, Object value, int timeToIdle, int timeToLive) throws IllegalStateException,
			IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, false, timeToIdle, timeToLive));
	}

	/**
	 * 将键值对放入缓存,并指定键值存在的时间
	 * 
	 * @param key
	 * @param value
	 * @param timeToLive 数据有效时间(不要超过一个月)
	 */
	public void put(Object key, Object value, int timeToIdle, int timeToLive) throws IllegalStateException,
			IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, false, timeToIdle, timeToLive));
	}

	/**
	 * 将键值对放入缓存,并指定键值存在的时间,同时不通知其他集群机器
	 * 
	 * @param key
	 * @param value
	 * @param timeToLive 数据有效时间(不要超过一个月)
	 */
	public void putWithoutReplication(Serializable key, Object value, int timeToIdle, int timeToLive)
			throws IllegalStateException, IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, false, timeToIdle, timeToLive), true);
	}

	/**
	 * 将键值对放入缓存,并指定键值存在的时间,同时不通知其他集群机器
	 * 
	 * @param key
	 * @param value
	 * @param timeToLive 数据有效时间(不要超过一个月)
	 */
	public void putWithoutReplication(Object key, Object value, int timeToIdle, int timeToLive)
			throws IllegalStateException, IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, false, timeToIdle, timeToLive), true);
	}

	/**
	 * 永久保存数据到缓存
	 * 
	 * @param key
	 * @param value
	 * @throws IllegalStateException
	 * @throws IllegalArgumentException
	 * @throws CacheException
	 */
	public void putEternal(Serializable key, Object value) throws IllegalStateException, IllegalArgumentException,
			CacheException {
		cache.put(new Element(key, value, true, 0, 0));
	}

	/**
	 * 永久保存数据到缓存
	 * 
	 * @param key
	 * @param value
	 * @throws IllegalStateException
	 * @throws IllegalArgumentException
	 * @throws CacheException
	 */
	public void putEternal(Object key, Object value) throws IllegalStateException, IllegalArgumentException,
			CacheException {
		cache.put(new Element(key, value, true, 0, 0));
	}

	/**
	 * 永久保存数据到缓存,并不通知其他集群机器
	 * 
	 * @param key
	 * @param value
	 * @throws IllegalStateException
	 * @throws IllegalArgumentException
	 * @throws CacheException
	 */
	public void putEternalWithoutReplication(Serializable key, Object value) throws IllegalStateException,
			IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, true, 0, 0), true);
	}

	/**
	 * 永久保存数据到缓存,并不通知其他集群机器
	 * 
	 * @param key
	 * @param value
	 * @throws IllegalStateException
	 * @throws IllegalArgumentException
	 * @throws CacheException
	 */
	public void putEternalWithoutReplication(Object key, Object value) throws IllegalStateException,
			IllegalArgumentException, CacheException {
		cache.put(new Element(key, value, true, 0, 0), true);
	}

	/**
	 * Replace the cached element only if the current Element is equal to the supplied old Element.
	 * 
	 * @param old Element to be test against
	 * @param element Element to be cached
	 * @return true is the Element was replaced
	 * @throws NullPointerException if the either Element is null or has a null key
	 * @throws IllegalArgumentException if the two Element keys are non-null but not equal
	 */
	public boolean replace(Element old, Element element) throws NullPointerException, IllegalArgumentException {
		return cache.replace(old, element);
	}

	/**
	 * Replace the cached element only if an Element is currently cached for this key
	 * 
	 * @param element Element to be cached
	 * @return the Element previously cached for this key, or null if no Element was cached
	 * @throws NullPointerException if the Element is null or has a null key
	 */
	public Element replace(Element element) throws NullPointerException {
		return cache.replace(element);
	}

	/**
	 * 删除指定键对应的值
	 * 
	 * @param key
	 */
	public void remove(Serializable key) throws IllegalStateException {
		cache.remove(key);
	}

	/**
	 * 删除指定键对应的值
	 * 
	 * @param key
	 */
	public void remove(Object key) throws IllegalStateException {
		cache.remove(key);
	}

	/**
	 * 删除指定键对应的值,仅限本机缓存
	 * 
	 * @param key
	 */
	public void removeWithoutReplication(Serializable key) throws IllegalStateException {
		cache.remove(key, true);
	}

	/**
	 * 删除指定键对应的值,仅限本机缓存
	 * 
	 * @param key
	 */
	public void removeWithoutReplication(Object key) throws IllegalStateException {
		cache.remove(key, true);
	}

	/**
	 * Flushes all cache items from memory to the disk store, and from the DiskStore to disk.
	 * 
	 * @throws IllegalStateException if the cache is not {@link Status#STATUS_ALIVE}
	 */
	public void flush() throws IllegalStateException, CacheException {
		cache.flush();
	}

	/**
	 * 清除所有缓存
	 */
	public void clear() throws IllegalStateException, CacheException {
		cache.removeAll();
	}

	/**
	 * 清除所有缓存,仅限本机缓存
	 * 
	 * @param notifyCacheReplicators
	 */
	public void clearWithoutReplication() throws IllegalStateException, CacheException {
		cache.removeAll(true);
	}

	/**
	 * 获取该Cache中所有的Key集合
	 * 
	 * @return
	 * @throws IllegalStateException
	 * @throws CacheException
	 */
	@SuppressWarnings("unchecked")
	public List<Object> getKeys() throws IllegalStateException, CacheException {
		return cache.getKeys();
	}

	/**
	 * 获得磁盘中存储的数据量
	 */
	public int getDiskStoreSize() throws IllegalStateException {
		return cache.getDiskStoreSize();
	}

	/**
	 * 获得内存中存储的数据量
	 */
	public final long getMemoryStoreSize() throws IllegalStateException {
		return cache.getMemoryStoreSize();
	}

	/**
	 * 获得所有数据量
	 */
	public final long getSize() throws IllegalStateException, CacheException {
		return cache.getSize();
	}

	/**
	 * 获得内存中数据的大小（单位:字节）
	 * <p>
	 * 警告:执行此方法的代价很大
	 */
	public final long calculateInMemorySize() throws IllegalStateException, CacheException {
		return cache.calculateInMemorySize();
	}

	/**
	 * Gets the status attribute of the Cache.
	 * 
	 * @return The status value from the Status enum class
	 */
	public final Status getStatus() {
		return cache.getStatus();
	}

	/***
	 * Need to wait for async
	 * 
	 * @throws InterruptedException
	 */
	protected void waitForPropagate() throws InterruptedException {
		Thread.sleep(1500);
	}

	/***
	 * Need to wait for async
	 * 
	 * @throws InterruptedException
	 */

	protected void waitForSlowPropagate() throws InterruptedException {
		Thread.sleep(6000);
	}

	/**
	 * Returns a {@link String} representation of {@link Cache}.
	 */
	public String toString() {
		return cache.toString();
	}
}
